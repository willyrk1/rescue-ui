import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './HomeLinks.module.scss'

const cx = classNames.bind(styles)

const HomeLinks = () => (
  <div className={cx('home-links')}>
    <div>
      <h1>Adopt</h1>
      <hr />
      <p>Open your heart and your home. Someone special is waiting for you.</p>
      <Link to="/adoptions" className={cx('btn')}>
        More Info
      </Link>
    </div>
    <div>
      <h1>Foster</h1>
      <hr />
      <p>Help them grow, learn and heal. Fostering saves lives.</p>
      <Link to="/volunteer" className={cx('btn')}>
        Learn How
      </Link>
    </div>
    <div>
      <h1>Donate</h1>
      <hr />
      <p>
        We are 100% volunteer-run. All donations go directly to the animals in
        our care.
      </p>
      <Link to="/donate" className={cx('btn')} href="#">
        More Info
      </Link>
    </div>
  </div>
)

export default HomeLinks
