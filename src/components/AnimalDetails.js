import React, { useState } from 'react';
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue';
import { getAge } from '../config/helpers';
import StandardLayout from './StandardLayout'
import Scroller from './Scroller'
import YouTubeIcon from '../assets/images/icon-youtube.png'
import styles from './AnimalDetails.module.scss';

const cx = classNames.bind(styles)

const AnimalDetails = ({ location: { state: { pet }}}) => {
  const sharedState = useState(0)
  const components = pet.images.map(({ public_filename }) => ({
    key: public_filename,
    component:
      <Popup
        modal
        closeOnDocumentClick
        contentStyle={{ width: 'auto' }}
        trigger={
          <button className={cx('popup')}>
            <img src={`${PROTOCOL}://${HOSTNAME}${public_filename}`} />
          </button>
        }
      >
        <div className={cx('popup-content')}>
          <img src={`${PROTOCOL}://${HOSTNAME}${public_filename}`} />
        </div>
      </Popup>
  }))

  return (
    <StandardLayout>
      <div className={cx('animal-details')}>
        <h1>{pet.name}</h1>
        <hr/>
        <div>
          <div className={cx('photos')}>
            <div className={cx('gallery', 'gallery--big')}>
              <Scroller
                components={components}
                styles={styles}
                scrollRems={42}
                state={sharedState}
              />
            </div>
            <div className={cx('simple-details')}>
              <ul>
                <li>
                  <label htmlFor='dob'>Age:</label>
                  <span id='dob'>{getAge(pet.date_of_birth)}</span>
                </li>
                <li>
                  <label htmlFor='gender'>Gender:</label>
                  <span id='gender'>{pet.sex}</span>
                </li>
                <li>
                  <label htmlFor='color'>Color:</label>
                  <span id='color'>{pet.animal_color.name}</span>
                </li>
                <li>
                  <label htmlFor='breed'>Breed:</label>
                  <span id='breed'>{pet.dominant_breed.name}</span>
                </li>
                <li>
                  <label htmlFor='fur'>Fur:</label>
                  <span id='fur'>{pet.fur_length}</span>
                </li>
              </ul>
            </div>
            <div className={cx('gallery', 'gallery--thumbnail')}>
              <Scroller
                components={components}
                styles={styles}
                scrollRems={10}
                state={sharedState}
              />
            </div>
          </div>

          <div className={cx('details')}>
            {pet.special_need && pet.special_need.name &&
              <p>
                <label htmlFor='special-need'>Special Need:</label>
                <span id='special-need'>{pet.special_need.name}</span>
              </p>
            }
            <p className={cx('story')}>{pet.story}</p>
            <p className={cx('good-with')}>
              <label htmlFor='good-with-cats'>Good with Cats:</label>
              <span id='good-with-cats'>{pet.good_with_cats}</span>|
              <label htmlFor='good-with-dogs'>Good with Dogs:</label>
              <span id='good-with-dogs'>{pet.good_with_dogs}</span>|
              <label htmlFor='good-with-children'>Good with Children:</label>
              <span id='good-with-children'>{pet.good_with_children}</span>
            </p>
            {pet.youtube_url &&
              <p className={cx('video')}>
                <span>Check out my video on</span>
                <a href={pet.youtube_url}>
                  <img src={YouTubeIcon} alt='YouTube'/>
                </a>
              </p>
            }
          </div>
        </div>
      </div>
    </StandardLayout>
  )
}

export default AnimalDetails
