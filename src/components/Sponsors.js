import React from 'react'
import classNames from 'classnames/bind'
import Scroller from './Scroller'
import styles from './Sponsors.module.scss'
import petcoLogo from '../assets/images/PetcoLogo.png'
import bisselLogo from '../assets/images/bisselpetfoundation.jpg'
import petSmartLogo from '../assets/images/petsmart_charities-1.jpg'
import elseyLogo from '../assets/images/DrElseysLogo_2021.jpg'
import powasnickLogo from '../assets/images/Powasnick.png'

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
            { key: 8, component: <img src={powasnickLogo} alt="Powasnick" /> },
            { key: 1, component: (
              <a href="https://petcolove.org/">
                <img src={petcoLogo} alt="Petco" />
              </a>
              )
            },
            {
              key: 4,
              component: (
                <a href="https://petsmartcharities.org/">
                  <img src={petSmartLogo} alt="PetSmart" />
                </a>
              )
            },
            {
              key: 6,
              component: (
                <a href="https://www.bissellpetfoundation.org/">
                  <img src={bisselLogo} alt="Bissell Pet Foundation" />
                </a>
              )
            },
            {
              key: 7,
              component: <img src={elseyLogo} alt="Dr. Elsey's" />,
            },
          ]}
          styles={styles}
        />
      </div>
    </div>
  )
}

export default Sponsors
