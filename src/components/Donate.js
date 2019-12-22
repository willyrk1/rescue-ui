import React from 'react';
import classNames from 'classnames/bind'
import Layout from './Layout'
import DonationExamples from './DonationExamples'
import dogCat from '../assets/images/dog-cat.png'
import donateCat from '../assets/images/donateCat.jpg'
import makeDonationCat from '../assets/images/kitty.png'
import styles from './Donate.module.scss';

const cx = classNames.bind(styles)

const Donate = () => {
  return (
    <Layout>
      <div className={cx('donate')}>
        <div className={cx('first')}>
          <div className={cx('side')}>
            <img src={dogCat}/>
            <DonationExamples styles={styles} />
          </div>
          <div className={cx('main')}>
            <div className={cx('top')}>
              <img src={donateCat}/>
              <h1>
                <em>Please Help.<br/> He's Counting on You.</em>
              </h1>
              <p>
                We are a 501(c)3 non-profit organization and receive no government funding.
                We have no paid employees so 100% of every dollar you donate goes to the animals.
              </p>
            </div>

            <div className={cx('make-donation')}>
              <div>
                <img src={makeDonationCat} />
                <div className={cx('one-time')}>
                  <p>Make A One-Time Donation</p>
                  <div className={cx("btn-container")}>
                    <a className={cx("btn btn--accent")} href="#">DONATE</a>
                  </div>
                </div>
              </div>
              <div>
                <img src={makeDonationCat} />
                <div className={cx('monthly')}>
                  <p>Make A Monthly Donation</p>
                  <div className={cx("btn-container")}>
                    <a className={cx("btn btn--accent")} href="#">DONATE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('mail-check')}>
          <p>
            If you prefer to send a check, please mail to: St. Francis Society, P.O. Box 261614, Tampa, FL 33685.
          </p>
        </div>

        <div className={cx('other')}>
          <h1>Other Ways To Help</h1>
          <hr/>
          <div className={cx('panels')}>
            <div className={cx('panel')}>
              <p>
                Shop Our Wish List
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Foster To Save Lives
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Use Amazon Smile
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Create A Facebook Fundraiser
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                ?
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Planned Giving
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donate;
