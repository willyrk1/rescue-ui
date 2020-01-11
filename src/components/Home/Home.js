import React from 'react'
import classNames from 'classnames/bind'
import Layout from '../Layout'
import Banner from './Banner'
import DonationExamples from '../DonationExamples'
import HomeLinks from './HomeLinks'
import FeaturedPets from './FeaturedPets'
import NewsEvents from './NewsEvents'
import styles from './Home.module.scss';
import donationStyles from './DonateRibbon.module.scss';

const cx = classNames.bind(styles)

const Home = () =>
  <Layout home>
    <div className={cx('home')}>
      <Banner />
      <DonationExamples styles={donationStyles}/>
      <HomeLinks />
      <FeaturedPets />
      <NewsEvents />
    </div>
  </Layout>

export default Home