import React from 'react';
import classNames from 'classnames/bind'
import styles from './Hero.module.scss';
import heroImage from '../../assets/images/hero.png'

const cx = classNames.bind(styles)

const Hero = () =>
  <div className={cx('hero')}>
    <img src={heroImage} />
    <div className={cx('text')}>
      <h1>
        CUDDLE<br/>
        <span className={cx('alt-color')}>PARTY</span>
      </h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex, non vulputate
        enim est gravida enim. Suspendisse eu tortor dui.
      </p>
      <a className={cx('btn')} href='#'>Foster</a>
    </div>
  </div>


export default Hero;
