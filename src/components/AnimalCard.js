import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import { getAge } from '../config/helpers';
import styles from './AnimalCard.module.scss'

const cx = classNames.bind(styles)

const DetailLink = ({ petType, list, pet: { id }, children }) =>
  <Link
    to={`./pet-details/${petType}/${list}/${id}`}
    className={cx('details-link')}
  >
    {children}
  </Link>

const AnimalCard = props => {
  const { pet } = props

  return (
    <div className={cx('animal-card')}>
      <div className={cx('pet-card')}>
        <DetailLink {...props}>
          <img src={`${PROTOCOL}://${HOSTNAME}${pet.primary_image_thumbnail}`} alt={pet.name} />
        </DetailLink>
        <div className={cx('description')}>
          <h3>{pet.name}</h3>
          <ul>
            <li>
              <label htmlFor='breed'>Breed</label>
              <span id='breed'>{pet.dominant_breed.name}</span>
            </li>
            <li>
              <label htmlFor='gender'>Gender</label>
              <span id='gender'>{pet.sex}</span>
            </li>
            <li>
              <label htmlFor='color'>Color</label>
              <span id='color'>{pet.animal_color.name}</span>
            </li>
            <li>
              <label htmlFor='dob'>Date of birth</label>
              <span id='dob'>{getAge(pet.date_of_birth)}</span>
            </li>
          </ul>
          <DetailLink {...props}>Read My Profile</DetailLink>
        </div>
      </div>
    </div>
  )
}

export default AnimalCard
