import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../../apis/StFrancisRescue';
import {PROTOCOL, HOSTNAME} from '../../config/StFrancisRescue';
import styles from './FeaturedPets.module.scss';

const cx = classNames.bind(styles)

const FeaturedPets = () => {
  const [pets, setPets] = useState()

  useEffect(() => {
    const loadPets = async () => {
      const catData = StFrancisRescue.getCats()
      const dogData = StFrancisRescue.getDogs()
      setPets([
        ...(await catData).data.fosteredAnimals,
        ...(await dogData).data.fosteredAnimals,
      ])
    }
    loadPets()
  }, [])

  const pet = pets && pets[Math.floor(Math.random() * pets.length)]
  const {
    public_filename: petImage,
  } = (pet && pet.images.find(({ primary }) => primary)) || {}

  return (
    <div className={cx('featured-pets')}>
      <h1>Featured Pet</h1>
      <hr/>
      {pet &&
        <>
          <div className={cx('pet-outer')}>
            <div className={cx('pet-image')}>
              <h2>{pet.name}</h2>
              <img src={`${PROTOCOL}://${HOSTNAME}${petImage}`} />
            </div>
            <div className={cx('pet-info')}>
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
                  <span id='dob'>{pet.date_of_birth}</span>
                </li>
                <li>
                  <label htmlFor='goodWithCats'>Good with cats</label>
                  <span id='goodWithCats'>{pet.good_with_cats}</span>
                </li>
                <li>
                  <label htmlFor='goodWithDogs'>Good with dogs</label>
                  <span id='goodWithDogs'>{pet.good_with_dogs}</span>
                </li>
                <li>
                  <label htmlFor='goodWithChildren'>Good with children</label>
                  <span id='goodWithChildren'>{pet.good_with_children}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("view-buttons")}>
            <a className={cx('btn')} href="#">View All Cats</a>
            <a className={cx('btn')} href="#">View All Dogs</a>
          </div>
        </>
      }
    </div>
  )
}

export default FeaturedPets