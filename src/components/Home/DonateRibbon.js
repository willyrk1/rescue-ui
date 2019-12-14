import React from 'react'
import classNames from 'classnames/bind'
import styles from './DonateRibbon.module.scss';

const cx = classNames.bind(styles)

const HomeLinks = () =>
  <div className={cx('donate-ribbon')}>
    <div>
      <div className={cx('money')}>$10</div>
      <div className={cx('caption')}>Food for<br/>a day.</div>
    </div>
    <div>
      <div className={cx('money')}>$20</div>
      <div className={cx('caption')}>For life-saving<br/>medicine.</div>
    </div>
    <div>
      <div className={cx('money')}>$100</div>
      <div className={cx('caption')}>Gives a night of<br/>crisis care.</div>
    </div>
    <div className={cx("btn-container")}>
      <a className={cx("btn btn--accent")} href="#">DONATE</a>
    </div>
  </div>

export default HomeLinks