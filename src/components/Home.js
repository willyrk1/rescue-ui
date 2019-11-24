import React from 'react'
import Hero from './Hero'
import donateRibbon from '../assets/images/donate_ribbon.png'

const Home = () => (
  <>
     <Hero />
     <img src={donateRibbon} />
  </> 
)

export default Home