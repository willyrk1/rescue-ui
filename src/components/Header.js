/********************************************************************************
 * Header component
 *
 * Header component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import headerKitten from '../assets/images/kitty.png'

const cx = classNames.bind(styles)

const Header = () =>
  <div>
    <header className={cx("header")}>
      <div className={cx("header__logo")}>
        <Link to="/">
          <img src="header-logo.svg" alt="St. Francis Society Animal Rescue" />
        </Link>
      </div>
      <ul className={cx("header__nav")}>
        <li><Link to="/adoptions">Adopt</Link></li>
        <li><Link to="/foster">Foster</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/donate">Help Our Cause</Link></li>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/mission">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <div className={cx("header__btn--container")}>
        <a className={cx("btn btn--accent")} href="#">Donate</a>
        <img src={headerKitten} />
      </div>
    </header>
  </div> 

export default Header
