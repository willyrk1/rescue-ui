import React from 'react'
import Popup from 'reactjs-popup'
import classNames from 'classnames/bind'
import PopupModal from '../PopupModal'
import kenLogo from '../../assets/images/KenLogo.jpg'
import styles from './NewsEvents.module.scss'

const cx = classNames.bind(styles)

const NewsEvents = () =>
  <div className={cx('home-news-events')}>
    <h1>News &amp; Events</h1>
    <hr/>
    <div className={cx('panels')}>
      <div className={cx('panel')}>
        <div className={cx('date')}></div>
        <h1>Free Will Offer</h1>
        <h2>&nbsp;</h2>
        <p>
          Attorney Ken Afienko is a long time supporter and St. Francis adoptive pet parent.  For
          a donation to St. Francis Society, he will provide a free simple will or living will.
        </p>
        <Popup
          modal
          closeOnDocumentClick
          trigger={<button type='button' className={cx('btn')} href='#'>More Info</button>}
        >
          {close =>
            <PopupModal close={close}>
              <img className={cx('kenLogo')} src={kenLogo} alt='Ken' />
              <PopupModal.Content>
                <p>
                  Attorney Ken Afienko is a long time supporter and St Francis adoptive pet
                  parent. He also proudly serves as a part-time Pinellas County Police Officer.
                  Ken is extending his generosity to us with a unique offer. He will provide wills
                  and living wills for supporters who donate to St Francis Rescue. 100% of the
                  donation benefits our medical fund to help sick and injured pets find new
                  forever homes!
                </p>
              </PopupModal.Content>
              <PopupModal.Actions>
                <PopupModal.ActionLink
                  href='http://foplawyer.com/wp-content/uploads/2013/10/LetterSt.Francis-signed.pdf'
                  target='_blank'
                >
                  Learn More
                </PopupModal.ActionLink>
                <PopupModal.CloseButton close={close} />
              </PopupModal.Actions>
            </PopupModal>
          }
        </Popup>
      </div>
      <div className={cx('panel')}>
        <div className={cx('date')}><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <a className={cx('btn')} href='#'>More Info</a>
      </div>
      <div className={cx('panel')}>
        <div className={cx('date')}><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <a className={cx('btn')} href='#'>More Info</a>
      </div>
    </div>
    <div>
        <a className={cx('btn', 'btn--secondary')} href='#'>View All</a>
    </div>
  </div>

export default NewsEvents