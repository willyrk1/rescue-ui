/********************************************************************************
 * Footer component
 *
 * Footer component for the Rescue UI.
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import instagramLogo from '../assets/images/instagram.png'
import twitterLogo from '../assets/images/twitter.png'
import youTubeLogo from '../assets/images/youtube.png'
import facebookLogo from '../assets/images/facebook.png'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = ({ legal }) => (
  <div className={cx('footer')}>
    <div className={cx('main')}>
      <div>
        <h1>Newsletter</h1>
        <hr />
        <p>Follow our newsletter and stay in the meow!</p>
        <form
          action="//oi.vresp.com?fid=37ceac6197"
          method="post"
          onSubmit={() => {
            window.open(
              '//www.verticalresponse.com',
              'vr_optin_popup',
              'scrollbars=yes,width=600,height=450'
            )
            return true
          }}
          target="vr_optin_popup"
        >
          <input type="text" placeholder="Enter email" name="email_address" />
          <div>
            <input className={cx('btn')} type="submit" value="SIGN UP" />
          </div>
        </form>
      </div>
      <div>
        <h1>Follow Us</h1>
        <hr />
        <div className={cx('image-list')}>
          <a
            href="//www.instagram.com/stfrancisrescuetampa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a
            href="//twitter.com/StFranSociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="Twitter" />
          </a>
          <a
            href="//www.youtube.com/user/StFrancisSociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeLogo} alt="YouTube" />
          </a>
          <a
            href="//facebook.com/StFrancisSocietyAnimalRescue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
    <div className={cx('bottom')}>
      {legal && (
        <p>
          A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE
          OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE
          800-435-7352 WITHIN THE STATE. REFER TO CH9650. REGISTRATION DOES NOT
          IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.
        </p>
      )}
      <p>
        &copy; {new Date().getFullYear()} St. Francis Society Animal
        Rescue.&nbsp;
        <Link to="/contact">Contact</Link> |&nbsp;
        <Link to="/privacy-policy">Privacy Policy</Link>
        &nbsp;| St. Francis Society Animal Rescue PO Box 261614 Tampa, FL
        33685-1614
      </p>
    </div>
  </div>
)

export default Footer
