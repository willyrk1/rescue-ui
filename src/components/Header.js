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
        <img className={cx('color')} src={logoColor} alt='St. Francis Society Animal Rescue' />
        <img className={cx('white')} src={logoWhite} alt='St. Francis Society Animal Rescue' />
      </Link>
    </div>
    <ul className={cx('header__nav', { home })}>
      <Popup
        trigger={<li><button type='button' className={cx('popup-link')}>Adopt</button></li>}
        on={['hover', 'click']}
      >
        <ul>
          <li><Link to='/adoptions'>Adoption Information</Link></li>
          <li><Link to='/adoption-locations'>Adoption Locations</Link></li>
          <li><Link to='/cats'>Adoptable Cats</Link></li>
          <li><Link to='/dogs'>Adoptable Dogs</Link></li>
          <li><Link to='/before-you-adopt'>Before You Adopt</Link></li>
          <li><Link to='/working-cats'>Working Cats</Link></li>
        </ul>
      </Popup>

      <li className={cx('lose1')}><Link to='/volunteer'>Volunteer</Link></li>
      <li className={cx('lose2')}><Link to='/help-our-cause'>Help Our Cause</Link></li>
      <li className={cx('lose1')}><Link to='/mission'>About</Link></li>
      <li className={cx('lose3')}><Link to='/contact'>Contact</Link></li>
      <li className={cx('gain4')}><Link to='/donate'>Donate</Link></li>

      <Popup
        trigger={
          <li>
            <button type='button' className={cx('popup-link', 'other')}>Other</button>
          </li>
        }
        on={['hover', 'click']}
      >
        <ul>
          <li><Link to='/mission'>About</Link></li>
          <li className={cx('gain3')}><Link to='/contact'>Contact</Link></li>
          <li className={cx('gain2')}><Link to='/help-our-cause'>Help Our Cause</Link></li>
          <li><Link to='/volunteer'>Volunteer</Link></li>
        </ul>
      </Popup>
    </ul>
    <div className={cx('donate-cat')}>
      <Link to='/donate' className={cx('btn')}>Donate</Link>
      <img src={headerKitten} alt='St. Francis' />
    </div>
  </header>

export default Header
