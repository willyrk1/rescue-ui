import React from 'react'
import classNames from 'classnames/bind'
import styles from './HomeLinks.module.scss';

const cx = classNames.bind(styles)

const HomeLinks = () =>
  <div className={cx('home-links')}>
    <div>
      <h1>Adopt</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className={cx("btn-container")}>
        <a className={cx("btn btn--accent")} href="#">View All</a>
      </div>
    </div>
    <div>
      <h1>Foster</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className={cx("btn-container")}>
        <a className={cx("btn btn--accent")} href="#">Learn How</a>
      </div>
    </div>
    <div>
      <h1>Donate</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className={cx("btn-container")}>
        <a className={cx("btn btn--accent")} href="#">More Info</a>
      </div>
    </div>
  </div>

export default HomeLinks