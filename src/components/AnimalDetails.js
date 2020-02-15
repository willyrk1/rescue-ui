import React, { useState } from 'react';
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import StandardLayout from './StandardLayout'
import Scroller from './Scroller'
import styles from './AnimalDetails.module.scss';

const cx = classNames.bind(styles)

const AnimalDetails = ({ location: { state: { pet }}}) => {
  const sharedState = useState(0)

  const modalComponents = pet.images.map(({ public_filename }) => ({
    key: public_filename,
    component: <img src={`${PROTOCOL}://${HOSTNAME}${public_filename}`} />
  }))
  const popupComponents = modalComponents.map(({ component, ...rest }) => ({
    ...rest,
    component:
      <Popup
        modal
        closeOnDocumentClick
        trigger={<button className={cx('popup')}>{component}</button>}
      >
        <div className={cx('gallery', 'gallery--popup')}>
          <Scroller
            components={modalComponents}
            styles={styles}
            scrollRems={42}
            state={sharedState}
          />
        </div>
      </Popup>
  }))

  return (
    <StandardLayout>
      <div className={cx('animal-details')}>
        <h1>{pet.name}</h1>
        <hr/>
        <div className={cx('gallery', 'gallery--big')}>
          <Scroller
            components={popupComponents}
            styles={styles}
            scrollRems={42}
            state={sharedState}
          />
        </div>
        <div className={cx('gallery', 'gallery--thumbnail')}>
          <Scroller
            components={popupComponents}
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
