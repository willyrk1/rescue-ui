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
import logoColor from '../assets/images/St_Francis_logo_Color.png'
import logoWhite from '../assets/images/St_Francis_Logo_White.png'

const cx = classNames.bind(styles)

const Header = ({ home }) =>
  <header className={cx("header", { home })}>
    <div className={cx("header__logo")}>
      <Link to="/">
        <img src={home ? logoColor : logoWhite} alt="St. Francis Society Animal Rescue" />
      </Link>
    </div>
    <ul className={cx("header__nav", { home })}>
      <li><Link to="/adoptions">Adopt</Link></li>
      <li><Link to="/volunteer">Volunteer</Link></li>
      <li><Link to="/donate">Help Our Cause</Link></li>
      <li><Link to="/">Events</Link></li>
      <li><Link to="/mission">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className={cx("header__btn--container")}>
      <a className={cx("btn btn--accent")} href="#">Donate</a>
      <img src={headerKitten} />
    </div>
  </header>

export default Header
