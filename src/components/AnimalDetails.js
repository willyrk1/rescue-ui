import React, { useState } from 'react';
import classNames from 'classnames/bind'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import StandardLayout from './StandardLayout'
import Scroller from './Scroller'
import styles from './AnimalDetails.module.scss';

const cx = classNames.bind(styles)

const AnimalDetails = ({ location: { state: { pet }}}) => {
  const sharedState = useState(0)
  const components = pet.images.map(({ public_filename }) => ({
    key: public_filename,
    component: <img src={`${PROTOCOL}://${HOSTNAME}${public_filename}`} />
  }))

  return (
    <StandardLayout>
      <div className={cx('animal-details')}>
        <h1>{pet.name}</h1>
        <hr/>
        <div className={cx('gallery--big')}>
          <Scroller
            components={components}
            styles={styles}
            scrollRems={42}
            state={sharedState}
          />
        </div>
        <div className={cx('gallery--thumbnail')}>
          <Scroller
            components={components}
            styles={styles}
            scrollRems={10}
            state={sharedState}
          />
        </div>
      </div>
    </StandardLayout>
  )
}

export default AnimalDetails
