import React from 'react'
import Hero from './Hero'
import HomeLinks from './HomeLinks'
import FeaturedPets from './FeaturedPets'
import NewsEvents from './NewsEvents'
import Sponsors from './Sponsors'
import './Home.scss';
import donateRibbon from '../../assets/images/donate_ribbon.png'

const Home = () => (
  <div className='home'>
    <Hero />
    <img src={donateRibbon} />
    <HomeLinks />
    <FeaturedPets />
    <NewsEvents />
    <Sponsors />
  </div> 
)

export default Home