import React from 'react'
import classNames from 'classnames/bind'
import styles from './FeaturedPets.module.scss';
import featuredDog from '../../assets/images/featuredDog.png'
import featuredCat from '../../assets/images/featuredCat.png'

const cx = classNames.bind(styles)

const FeaturedPets = () =>
  <div className={cx('featured-pets')}>
    <h1>Featured Pets</h1>
    <hr/>
    <div>
      <div>
        <div className={cx('pet-image')} style={{ backgroundImage: `url(${featuredDog})` }}>
          
        </div>
        <div className={cx("btn-container")}>
          <a className={cx("btn btn--accent")} href="#">View All Dogs</a>
        </div>
      </div>
      <div>
        <div className={cx('pet-image')} style={{ backgroundImage: `url(${featuredCat})` }}>
          
        </div>
        <div className={cx("btn-container")}>
          <a className={cx("btn btn--accent")} href="#">View All Cats</a>
        </div>
      </div>
    </div>
  </div>

export default FeaturedPets