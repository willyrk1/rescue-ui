import React from 'react'
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
      <div className={cx('heading')}>
        <h1>Our Sponsors</h1>
        <hr />
      </div>
      <div className={cx('scroller')}>
        <Scroller
          components={[
            { key: 1, component: <img src={petcoLogo} alt="Petco" /> },
            {
              key: 2,
              component: (
                <img src={gulfCoastLogo} alt="Gulf Coast Veterinary" />
              ),
            },
            {
              key: 3,
              component: <img src={westChaseLogo} alt="WestChase Veterinary" />,
            },
            { key: 4, component: <img src={petSmartLogo} alt="PetSmart" /> },
            {
              key: 5,
              component: <img src={bigCatLogo} alt="Big Cat Rescue" />,
            },
            {
              key: 6,
              component: <img src={bisselLogo} alt="Bissell Pet Foundation" />,
            },
          ]}
          styles={styles}
        />
      </div>
    </div>
  )
}

export default Sponsors
