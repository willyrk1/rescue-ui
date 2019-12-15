import React from 'react'
import classNames from 'classnames/bind'
import styles from './DonateRibbon.module.scss';

const cx = classNames.bind(styles)

const HomeLinks = () =>
  <div className={cx('donate-ribbon')}>
    <div>
      <div className={cx('money')}>$10</div>
      <div className={cx('caption')}>Feed a kitten<br/> for a month.</div>
    </div>
    <div>
      <div className={cx('money')}>$25</div>
      <div className={cx('caption')}>Vaccinate one<br/> animal.</div>
    </div>
    <div>
      <div className={cx('money')}>$100</div>
      <div className={cx('caption')}>For life-saving<br/> medicine.</div>
    </div>
    <div className={cx("btn-container")}>
      <a className={cx("btn btn--accent")} href="#">DONATE</a>
    </div>
  </div>

export default HomeLinks