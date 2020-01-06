import React, { useState } from 'react'
import classNames from 'classnames/bind'
import Scroller from '../Scroller'
import styles from './Banner.module.scss'
import Hero from './Hero'
import guardianAngelBanner from '../../assets/images/guardianangel.jpg'
import fiv from '../../assets/images/fiv.jpg'

const cx = classNames.bind(styles)

const Banner = () =>
  <div className={cx('banner')}>
    <Scroller
      components={[
        { key: 1, component: <Hero /> },
        { key: 2, component: <img src={guardianAngelBanner} /> },
        { key: 3, component: <img src={fiv} /> },
      ]}
      styles={styles}
      scrollRems={120}
    />
  </div>

export default Banner