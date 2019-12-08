/********************************************************************************
 * Footer component
 *
 * Footer component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import instagramLogo from '../assets/images/instagram.png'
import twitterLogo from '../assets/images/twitter.png'
import youTubeLogo from '../assets/images/youtube.png'
import facebookLogo from '../assets/images/facebook.png'
import './Footer.scss';

const Footer = () => (
  <div className="Footer" id="footer">
    <div>
      <div>
        <h1>Newsletter</h1>
        <hr/>
        <p>Follow our newsletter and stay in the meow!</p>
        <input type='text' />
        <div className="btn-container">
          <a className="btn btn--accent" href="#">SIGN UP</a>
        </div>
      </div>
      <div>
        <h1>Follow Us</h1>
        <hr/>
        <div className='image-list'>
          <img src={instagramLogo} />
          <img src={twitterLogo} />
          <img src={youTubeLogo} />
          <img src={facebookLogo} />
        </div>
      </div>
    </div>
    <p className='copyright'>© {new Date().getFullYear()} St. Francis Society Animal Rescue. Contact | Privacy Policy | St. Francis Society Animal Rescue PO Box 261614 Tampa, FL 33685-1614</p>
  </div>
)

export default Footer
