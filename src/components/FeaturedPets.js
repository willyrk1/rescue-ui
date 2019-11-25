import React from 'react'
import './FeaturedPets.scss';
import featuredDog from '../assets/images/featuredDog.png'
import featuredCat from '../assets/images/featuredCat.png'

const FeaturedPets = () => (
  <div className='featured-pets'>
    <h1>Featured Pets</h1>
    <hr/>
    <div>
      <div>
        <div className='pet-image' style={{ backgroundImage: `url(${featuredDog})` }}>
          ABC
        </div>
        <div className="btn-container">
          <a className="btn btn--orange" href="#">View All Dogs</a>
        </div>
      </div>
      <div>
        <div className='pet-image' style={{ backgroundImage: `url(${featuredCat})` }}>
          XYZ
        </div>
        <div className="btn-container">
          <a className="btn btn--orange" href="#">View All Cats</a>
        </div>
      </div>
    </div>
  </div>
)

export default FeaturedPets