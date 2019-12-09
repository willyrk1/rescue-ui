import React from 'react'
import classNames from 'classnames/bind'
import Layout from '../Layout'
import Hero from './Hero'
import HomeLinks from './HomeLinks'
import FeaturedPets from './FeaturedPets'
import NewsEvents from './NewsEvents'
import styles from './Home.module.scss';
import donateRibbon from '../../assets/images/donate_ribbon.png'

const cx = classNames.bind(styles)

const Home = () =>
  <Layout home>
    <div className={cx('home')}>
      <Hero />
      <img src={donateRibbon} />
      <HomeLinks />
      <FeaturedPets />
      <NewsEvents />
    </div>
  </Layout>

export default Home