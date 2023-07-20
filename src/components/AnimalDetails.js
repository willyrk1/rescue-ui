import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import { getAge } from '../config/helpers'
import StandardLayout from './StandardLayout'
import Error from './Error'
import Scroller from './Scroller'
import YouTubeIcon from '../assets/images/icon-youtube.png'
import styles from './AnimalDetails.module.scss'
import { useLocations, usePetData } from '../context/GlobalDataContext'

const cx = classNames.bind(styles)

const AnimalImages = ({ images, name, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index)

  const setIndex = newIndex => () => setCurrentIndex(newIndex)

  return (
    <>
      {currentIndex && (
        <div className={cx('arrow', 'left')}>
          <button onClick={setIndex(currentIndex - 1)}>&lt;</button>
        </div>
      )}
      <img
        src={`${PROTOCOL}://${HOSTNAME}${images[currentIndex].public_filename}`}
        alt={name}
      />
      {currentIndex < images.length - 1 && (
        <div className={cx('arrow', 'right')}>
          <button onClick={setIndex(currentIndex + 1)}>&gt;</button>
        </div>
      )}
    </>
  )
}

const AnimalDetails = () => {
  const { petType, list, animalId } = useParams()
  const petData = usePetData()
  const pet =
    petData &&
    petData[petType] &&
    petData[petType][list].find(({ id }) => id === +animalId)

  const sharedState = useState(0)

  useEffect(() => {
    if (pet) {
      const primaryImageIndex = pet.images.findIndex(
        ({ public_filename }) =>
          public_filename === pet.primary_image_thumbnail.replace('_thumb', '')
      )
      if (primaryImageIndex >= 0) {
        sharedState[1](primaryImageIndex)
      }
    }
  }, [pet, sharedState])

  const components =
    pet &&
    pet.images &&
    pet.images.map(({ public_filename }, index) => ({
      key: public_filename,
      component: (
        <Popup
          modal
          closeOnDocumentClick
          contentStyle={{ width: 'auto' }}
          trigger={
            <button className={cx('popup')}>
              <img
                src={`${PROTOCOL}://${HOSTNAME}${public_filename}`}
                alt={pet.name}
              />
            </button>
          }
        >
          <div className={cx('popup-content')}>
            <AnimalImages {...{ ...pet, index }} />
          </div>
        </Popup>
      ),
    }))

  const contactMethods = {
    Email: { email: true },
    Phone: { phone: true },
    Both: { email: true, phone: true, both: true },
  }[pet && pet.foster_method_of_contact]

  const locations = useLocations()

  const location =
    locations && pet && locations.find(({ id }) => id === pet.location_id)

  return (
    <StandardLayout>
      {petData && !petData[petType] ? (
        <Error />
      ) : (
        pet && (
          <div className={cx('animal-details')}>
            <h1>{pet.name}</h1>
            <hr />
            <div className={cx('main')}>
              <div className={cx('photos')}>
                <div className={cx('gallery', 'gallery--big')}>
                  <Scroller
                    components={components}
                    styles={styles}
                    state={sharedState}
                    showCount={1}
                  />
                </div>
                <div className={cx('simple-details')}>
                  <ul>
                    <li>
                      <label htmlFor="dob">Age:</label>
                      <span id="dob">{getAge(pet.date_of_birth)}</span>
                    </li>
                    <li>
                      <label htmlFor="gender">Gender:</label>
                      <span id="gender">{pet.sex}</span>
                    </li>
                    <li>
                      <label htmlFor="color">Color:</label>
                      <span id="color">{pet.animal_color.name}</span>
                    </li>
                    <li>
                      <label htmlFor="breed">Breed:</label>
                      <span id="breed">{pet.dominant_breed.name}</span>
                    </li>
                    <li>
                      <label htmlFor="fur">Fur:</label>
                      <span id="fur">{pet.fur_length}</span>
                    </li>
                  </ul>
                </div>
                <div className={cx('gallery', 'gallery--thumbnail')}>
                  <Scroller
                    components={components}
                    styles={styles}
                    state={sharedState}
                    showCount={5}
                  />
                </div>
              </div>

              <div className={cx('details')}>
                {pet.special_need && pet.special_need.name && (
                  <p>
                    <label htmlFor="special-need">Special Need:</label>
                    {pet.special_need.reference ? (
                      <Link to={`/special-need${pet.special_need.reference}`}>
                        {pet.special_need.name}
                      </Link>
                    ) : (
                      <span id="special-need">{pet.special_need.name}</span>
                    )}
                  </p>
                )}
                <p className={cx('story')}>{pet.story}</p>
                <p className={cx('properties')}>
                  <label htmlFor="good-with-cats">Good with Cats:</label>
                  <span id="good-with-cats">{pet.good_with_cats}</span>|
                  <label htmlFor="good-with-dogs">Good with Dogs:</label>
                  <span id="good-with-dogs">{pet.good_with_dogs}</span>|
                  <label htmlFor="good-with-children">
                    Good with Children:
                  </label>
                  <span id="good-with-children">{pet.good_with_children}</span>
                </p>
                {pet.must_adopt_with && (
                  <p className={cx('properties')}>
                    <label htmlFor="must-adopt-with">Must Adopt With:</label>
                    <span id="must-adopt-with">{pet.must_adopt_with}</span>
                  </p>
                )}
                {pet.youtube_url && (
                  <p className={cx('video')}>
                    <span>Check out my video on</span>
                    <a href={pet.youtube_url}>
                      <img src={YouTubeIcon} alt="YouTube" />
                    </a>
                  </p>
                )}
                {pet.foster_name && (
                  <p>
                    If you have any questions about {pet.name}, contact{' '}
                    {pet.foster_name.split(' ')[0]} at{' '}
                    {contactMethods.email && pet.foster_email}
                    {contactMethods.both && ' or '}
                    {contactMethods.phone && pet.foster_phone}.
                  </p>
                )}
                {list === 'adoptionCenterAnimals' ? (
                  location && (
                    <p>
                      {pet.name} is currently at our{' '}
                      <strong>{location.name}</strong> adoption center located
                      at{' '}
                      <a
                        target="_blank" rel="noreferrer"
                        href={`//maps.google.com/maps?q=${location.street_address_1},+${location.city},+${location.state}`}
                      >
                        {location.street_address_1}, {location.city}
                      </a>
                    </p>
                  )
                ) : (
                  <>
                    <p>
                      Submit an adoption application for {pet.name} by clicking
                      on the "want to adopt me?" button.
                    </p>
                    <Link
                      to={`/adoption-form/${petType}/${list}/${animalId}`}
                      className={cx('btn')}
                    >
                      Want to Adopt Me?
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </StandardLayout>
  )
}

export default AnimalDetails
