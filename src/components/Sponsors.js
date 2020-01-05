import React, { useState } from 'react'
import classNames from 'classnames/bind'
import Scroller from './Scroller'
import styles from './Sponsors.module.scss'
import bigCatLogo from '../assets/images/BigCatRescueLogo.png'
import petcoLogo from '../assets/images/PetcoLogo.png'
import gulfCoastLogo from '../assets/images/Gulfcoast Veterinary Center.png'
import westChaseLogo from '../assets/images/Westchase_Veterinary_Center_and_Emergenc.png'
import bisselLogo from '../assets/images/bisselpetfoundation.jpg'
import petSmartLogo from '../assets/images/petsmart_charities-1.jpg'

const cx = classNames.bind(styles)

const Sponsors = () => {
  return (
    <div className={cx('sponsors')}>
      <div>
        <h1>Our Sponsors</h1>
        <hr/>
      </div>
      <Scroller
        components={[
          { key: 1, component: <img src={petcoLogo} /> },
          { key: 2, component: <img src={gulfCoastLogo} /> },
          { key: 3, component: <img src={westChaseLogo} /> },
          { key: 4, component: <img src={petSmartLogo} /> },
          { key: 5, component: <img src={bigCatLogo} /> },
          { key: 6, component: <img src={bisselLogo} /> },
        ]}
        styles={styles}
        scrollRems={20}
      />
    </div>
  )
}

export default Sponsors