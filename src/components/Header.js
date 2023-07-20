/********************************************************************************
 * Header component
 *
 * Header component for the Rescue UI.
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import styles from './Header.module.scss'
import headerKitten from '../assets/images/kitty.png'
import logoColor from '../assets/images/St_Francis_logo_Color.png'
import logoWhite from '../assets/images/St_Francis_Logo_White.png'

const cx = classNames.bind(styles)

const Header = ({ home }) => (
  <header className={cx('header', { home })}>
    <div className={cx('header__logo')}>
      <Link to="/">
        <img
          className={cx('color')}
          src={logoColor}
          alt="St. Francis Society Animal Rescue"
        />
        <img
          className={cx('white')}
          src={logoWhite}
          alt="St. Francis Society Animal Rescue"
        />
      </Link>
    </div>
    <ul className={cx('header__nav', { home })}>
      <Popup
        trigger={
          <li key="adopt">
            <button type="button" className={cx('popup-link')}>
              Adopt
            </button>
          </li>
        }
        on={['hover', 'click']}
      >
        <div className="menu">
          <div className="menu-item">
            <Link to="/adoptions">Adoption Information</Link>
          </div>
          <div className="menu-item">
            <Link to="/adoption-locations">Adoption Locations</Link>
          </div>
          <div className="menu-item">
            <Link to="/cats">Adoptable Cats</Link>
          </div>
          <div className="menu-item">
            <Link to="/dogs">Adoptable Dogs</Link>
          </div>
          <div className="menu-item">
            <Link to="/before-you-adopt">Before You Adopt</Link>
          </div>
          <div className="menu-item">
            <Link to="/working-cats">Working Cats</Link>
          </div>
        </div>
      </Popup>

      <li className={cx('lose-20')} key="volunteer">
        <Link to="/volunteer">Volunteer</Link>
      </li>
      <li className={cx('lose-30')} key="help">
        <Link to="/help-our-cause">Help Our Cause</Link>
      </li>
      <li className={cx('lose-10')} key="about">
        <Link to="/mission">About</Link>
      </li>
      <li className={cx('lose-40')} key="contact">
        <Link to="/contact">Contact</Link>
      </li>
      <li className={cx('gain-50')} key="donate">
        <Link to="/donate">Donate</Link>
      </li>
      <li className={cx('lose-10')} key="lost">
        <Link to="/lost-a-pet">Lost a Pet</Link>
      </li>

      <Popup
        trigger={
          <li key="other">
            <button type="button" className={cx('popup-link', 'other')}>
              Other
            </button>
          </li>
        }
        on={['hover', 'click']}
      >

        <div className="menu">
          <div className="menu-item">
            <Link to="/mission">About</Link>
          </div>
          <div className="menu-item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="menu-item">
            <Link to="/help-our-cause">Help Our Cause</Link>
          </div>
          <div className="menu-item">
            <Link to="/lost-a-pet">Lost a Pet</Link>
          </div>
          <div className="menu-item">
            <Link to="/volunteer">Volunteer</Link>
          </div>
        </div>

      </Popup>
    </ul>
    <div className={cx('donate-cat')}>
      <Link to="/donate" className={cx('btn')}>
        Donate
      </Link>
      <img src={headerKitten} alt="St. Francis" />
    </div>
  </header>
)

export default Header
