/********************************************************************************
 * Header component
 *
 * Header component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import styles from './Header.module.scss';
import headerKitten from '../assets/images/kitty.png'
import logoColor from '../assets/images/St_Francis_logo_Color.png'
import logoWhite from '../assets/images/St_Francis_Logo_White.png'

const cx = classNames.bind(styles)

const Header = ({ home }) =>
  <header className={cx('header', { home })}>
    <div className={cx('header__logo')}>
      <Link to='/'>
        <img src={home ? logoColor : logoWhite} alt='St. Francis Society Animal Rescue' />
      </Link>
    </div>
    <ul className={cx('header__nav', { home })}>
      <Popup
        trigger={<li><a>Adopt</a></li>}
        on='hover'
      >
        <ul>
          <li><Link to='/adoptions'>Adoption Information</Link></li>
          <li><Link to='/adoption-locations'>Adoption Locations</Link></li>
          <li><Link to='/cats'>Adoptable Cats</Link></li>
          <li><Link to='/dogs'>Adoptable Dogs</Link></li>
          <li><Link to='/working-cats'>Working Cats</Link></li>
          <li><a href='#'>Before You Adopt</a></li>
        </ul>
      </Popup>

      <li><Link to='/volunteer'>Volunteer</Link></li>
      <li><Link to='/help-our-cause'>Help Our Cause</Link></li>
      <li><Link to='/mission'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    <div className={cx('donate-cat')}>
      <Link to='/donate' className={cx('btn')}>Donate</Link>
      <img src={headerKitten} />
    </div>
  </header>

export default Header
