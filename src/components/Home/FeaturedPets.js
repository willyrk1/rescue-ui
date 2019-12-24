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

  const canvasHeight = 300 // image max-height
  const canvasWidth = 986

  const pet = pets && pets[Math.floor(Math.random() * pets.length)]
  const {
    public_filename: petImage,
    height,
    width,
  } = (pet && pet.images.find(({ primary }) => primary)) || {}

  const realImageWidth = width * (canvasHeight / height)
  const textWidth = pet && (pet.story.length * 0.75)
  const padding = (canvasWidth - realImageWidth - textWidth) / 2

  return (
    <div className={cx('featured-pets')}>
      <div>
        <h1>Featured Pet</h1>
        <hr/>
        {pet &&
          <div className={cx('pet-outer')} style={{ padding: `0 ${padding}px`}}>
        {console.log(pet)}
            <div>
              <h2>{pet.name}</h2>
                <div className={cx('pet')}>
                  <img src={`${PROTOCOL}://${HOSTNAME}${petImage}`} />
                <p>{pet.story}</p>
            </div>
            <div className={cx("btn-container")}>
              <a className={cx("btn btn--accent")} href="#">View All Cats</a>
              <a className={cx("btn btn--accent")} href="#">View All Dogs</a>
            </div>
          </div>
          </div>
        }
      </div>
    </div>
  )
}

export default FeaturedPets