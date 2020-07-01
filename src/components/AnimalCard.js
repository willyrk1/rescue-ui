import React from 'react'
import classNames from 'classnames/bind'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import { getAge } from '../config/helpers'
import AnimalLink from './AnimalLink'
import styles from './AnimalCard.module.scss'

const cx = classNames.bind(styles)

const AnimalCard = props => {
  const { pet } = props

  const DetailLink = ({ children }) => (
    <AnimalLink {...props} className={cx('details-link')}>
      {children}
    </AnimalLink>
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

export default AnimalCard
