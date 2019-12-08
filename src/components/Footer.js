/********************************************************************************
 * Footer component
 *
 * Footer component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import classNames from 'classnames/bind'
import instagramLogo from '../assets/images/instagram.png'
import twitterLogo from '../assets/images/twitter.png'
import youTubeLogo from '../assets/images/youtube.png'
import facebookLogo from '../assets/images/facebook.png'
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

const Footer = () => (
  <div className={cx("footer")}>
    <div>
      <div>
        <h1>Newsletter</h1>
        <hr/>
        <p>Follow our newsletter and stay in the meow!</p>
        <input type='text' />
        <div className={cx("btn-container")}>
          <a className={cx("btn btn--accent")} href="#">SIGN UP</a>
        </div>
      </div>
      <div>
        <h1>Follow Us</h1>
        <hr/>
        <div className={cx('image-list')}>
          <img src={instagramLogo} />
          <img src={twitterLogo} />
          <img src={youTubeLogo} />
          <img src={facebookLogo} />
        </div>
      </div>
    </div>
    <p className={cx('copyright')}>© {new Date().getFullYear()} St. Francis Society Animal Rescue. Contact | Privacy Policy | St. Francis Society Animal Rescue PO Box 261614 Tampa, FL 33685-1614</p>
  </div>
)

export default Footer
