import React from 'react';
import classNames from 'classnames/bind'
import Layout from './Layout'
import DonationExamples from './DonationExamples'
import dogCat from '../assets/images/dog-cat.png'
import donateCat from '../assets/images/donateCat.jpg'
import styles from './Donate.module.scss';

const cx = classNames.bind(styles)

const Donate = () => {
  return (
    <Layout>
      <div className={cx('donate')}>
        <div className={cx('side')}>
          <img src={dogCat}/>
          <DonationExamples styles={styles} more />
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
              <p>Make A One-Time Donation</p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">DONATE</a>
              </div>
            </div>
            <div>
              <p>Make A Monthly Donation</p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">DONATE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donate;
