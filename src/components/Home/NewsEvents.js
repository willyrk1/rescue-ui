import React, { useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames/bind'
import PopupModal from '../PopupModal'
import kenLogo from '../../assets/images/KenLogo.jpg'
import statsImage from '../../assets/images/stats.png'
import styles from './NewsEvents.module.scss'
import foodSponsorshipForm from '../../assets/pdf/FoodSponsorshipForm.pdf'
import foodSponsorshipImage from '../../assets/images/KittenSiameseWithEmptyBowl.jpg'
import kenAfienkoImage from '../../assets/images/KenAfienko.jpg'
import StFrancisRescue from '../../apis/StFrancisRescue'

const cx = classNames.bind(styles)

const NewsEvents = () => {
  const [animalsSaved, setAnimalsSaved] = useState({ ytd: 0, since2008: 0 })
  const [elapsed, setElapsed] = useState(0)

  const intervalRef = useRef()

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    // Ignore for now...
    const handleError = async result => result.catch(() => ({}))

    const loadStats = async () => {
      const {
        data: {
          total_adoptions_this_year,
          total_transferred_out_this_year,
          total_transfer_to_fos_this_year,
          total_workcat_adoptions_this_year,
          total_adoptions_since_2008,
          total_transferred_out_since_2008,
          total_transfer_to_fos_since_2008,
          total_workcat_adoptions_since_2008,
        } = {},
      } = await handleError(StFrancisRescue.getStats())
      setAnimalsSaved({
        ytd:
          total_adoptions_this_year +
          total_transferred_out_this_year +
          total_transfer_to_fos_this_year +
          total_workcat_adoptions_this_year,
        since2008:
          total_adoptions_since_2008 +
          total_transferred_out_since_2008 +
          total_transfer_to_fos_since_2008 +
          total_workcat_adoptions_since_2008,
      })
    }

    loadStats()
  }, [])

  /*
   * In millisecons...
   */
  const intervalTime = 10
  const totalTime = 1000

  const startRunup = isVisible => {
    if (isVisible && !elapsed) {
      const startTime = Date.now()
      intervalRef.current = setInterval(() => {
        if (Date.now() - startTime > totalTime) {
          clearInterval(intervalRef.current)
          setElapsed(totalTime)
        } else {
          setElapsed(Date.now() - startTime)
        }
      }, intervalTime)
    }
  }

  return (
    <div className={cx('home-news-events')}>
      <h1>The Latest</h1>
      <hr />
      <div className={cx('panels')}>
        <div className={cx('panel')}>
          <div className={cx('panel-content', 'center')}>
            <h2>Attorney Ken&nbsp;Afienko</h2>
            <hr />
            <img src={kenAfienkoImage} alt="Ken Afienko" />
            <h3>Free Simple Will Or Living Will</h3>
            <Popup
              modal
              closeOnDocumentClick
              trigger={
                <button type="button" className={cx('btn')} href="#">
                  More Info
                </button>
              }
            >
              {close => (
                <PopupModal close={close}>
                  <img className={cx('kenLogo')} src={kenLogo} alt="Ken" />
                  <PopupModal.Content>
                    <p>
                      Attorney Ken Afienko is a long time supporter and St
                      Francis adoptive pet parent. He also proudly serves as a
                      part-time Pinellas County Police Officer. Ken is extending
                      his generosity to us with a unique offer. He will provide
                      wills and living wills for supporters who donate to St
                      Francis Rescue. 100% of the donation benefits our medical
                      fund to help sick and injured pets find new forever homes!
                    </p>
                  </PopupModal.Content>
                  <PopupModal.Actions>
                    <PopupModal.ActionLink
                      href="http://foplawyer.com/wp-content/uploads/2013/10/LetterSt.Francis-signed.pdf"
                      target="_blank"
                    >
                      Learn More
                    </PopupModal.ActionLink>
                    <PopupModal.CloseButton close={close} />
                  </PopupModal.Actions>
                </PopupModal>
              )}
            </Popup>
          </div>
        </div>
        <div className={cx('panel')}>
          <div className={cx('panel-content', 'center')}>
            <h2>
              Animals
              <br /> Saved
            </h2>
            <hr />
            <img src={statsImage} alt="Stats" />
            <VisibilitySensor onChange={startRunup}>
              <div className={cx('stat')}>
                <span>Year-To-Date:</span>{' '}
                {animalsSaved.ytd
                  ? Math.floor(
                      (animalsSaved.ytd * elapsed) / totalTime
                    ).toLocaleString('en')
                  : 'N/A'}
                <br />
                <span>Since 2008:</span>{' '}
                {animalsSaved.since2008
                  ? Math.floor(
                      (animalsSaved.since2008 * elapsed) / totalTime
                    ).toLocaleString('en')
                  : 'N/A'}
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className={cx('panel')}>
          <div className={cx('panel-content', 'center')}>
            <h2>Food&nbsp;Friend Of&nbsp;The&nbsp;Month</h2>
            <hr />
            <img src={foodSponsorshipImage} alt="Food Friend" />
            <h3>Food Friend: See&nbsp;Your&nbsp;Logo&nbsp;Here</h3>
            <a className={cx('btn')} href={foodSponsorshipForm} target="_blank">
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsEvents
