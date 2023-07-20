import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import qs from 'query-string'
import classNames from 'classnames/bind'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import { getAge } from '../config/helpers'
import AnimalLink from './AnimalLink'
import styles from './AnimalCard.module.scss'

const cx = classNames.bind(styles)

const AnimalCard = props => {
  const { pet } = props
  const location = useLocation()
  const navigate = useNavigate()

  const onLinkClick = event => {
    const search = qs.parse(location.search)

    navigate({
      ...location,
      replace: true,
      search: qs.stringify({
        ...search,
        s: window.scrollY,
      }),
    })
  }

  const DetailLink = linkProps => (
    <AnimalLink
      {...props}
      {...linkProps}
      className={cx('details-link')}
      onClick={onLinkClick}
    />
  )

  return (
    <div className={cx('animal-card')}>
      <div className={cx('pet-card')}>
        <DetailLink>
          <img
            src={`${PROTOCOL}://${HOSTNAME}${pet.primary_image_thumbnail}`}
            alt={pet.name}
          />
        </DetailLink>
        <div className={cx('description')}>
          <h3>{pet.name}</h3>
          <ul>
            <li>
              <label htmlFor="breed">Breed</label>
              <span id="breed">{pet.dominant_breed.name}</span>
            </li>
            <li>
              <label htmlFor="gender">Gender</label>
              <span id="gender">{pet.sex}</span>
            </li>
            <li>
              <label htmlFor="color">Color</label>
              <span id="color">{pet.animal_color.name}</span>
            </li>
            {pet.special_need && pet.special_need.name && (
              <li>
                <label htmlFor="specialNeed">Age</label>
                <span id="specialNeed">{pet.special_need.name}</span>
              </li>
            )}
            <li>
              <label htmlFor="dob">Age</label>
              <span id="dob">{getAge(pet.date_of_birth)}</span>
            </li>
          </ul>
          <DetailLink>Read My Profile</DetailLink>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AnimalCard)
