import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../../apis/StFrancisRescue';
import {PROTOCOL, HOSTNAME} from '../../config/StFrancisRescue';
import styles from './FeaturedPets.module.scss';
import featuredDog from '../../assets/images/featuredDog.png'

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

  const randomPets = pets && (() => {
    const randomSet = new Set()
    while (randomSet.size < 3)
    {
      randomSet.add(Math.floor(Math.random() * pets.length))
    }
    return [...randomSet].map(index => {
      const pet = pets[index]
      const { public_filename: petImage = null } =
        (pet && pet.images.find(({ primary }) => primary)) || {}
      return { ...pet, petImage }
    })
  })()

  return (
    <div className={cx('featured-pets')}>
      <h1>Featured Pets</h1>
      <hr/>
      {randomPets &&
        <div className={cx('pet-outer')}>
          <div className={cx('pet-list')}>
            {randomPets.map(({ name, petImage }) =>
              <div className={cx('pet')}>
                <h2>{name}</h2>
                <img src={`${PROTOCOL}://${HOSTNAME}${petImage}`} />
              </div>
            )}
          </div>
          <div className={cx("btn-container")}>
            <a className={cx("btn btn--accent")} href="#">View All Cats</a>
            <a className={cx("btn btn--accent")} href="#">View All Dogs</a>
          </div>
        </div>
      }
    </div>
  )
}

export default FeaturedPets