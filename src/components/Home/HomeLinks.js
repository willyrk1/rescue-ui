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
        Open your heart and your home. Someone special is waiting for you.
      </p>
      <a className={cx('btn')} href='#'>View All</a>
    </div>
    <div>
      <h1>Foster</h1>
      <hr/>
      <p>
        Help them grow, learn and heal.  Fostering saves lives.
      </p>
      <a className={cx('btn')} href='#'>Learn How</a>
    </div>
    <div>
      <h1>Donate</h1>
      <hr/>
      <p>
        We are 100% volunteer-run.  All donations go directly to the animals in our care.
      </p>
      <a className={cx('btn')} href='#'>More Info</a>
    </div>
  </div>

export default HomeLinks