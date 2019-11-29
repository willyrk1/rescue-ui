import React from 'react'
import './HomeLinks.scss';

const HomeLinks = () => (
  <div className='home-links'>
    <div>
      <h1>Adopt</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className="btn-container">
        <a className="btn btn--accent" href="#">View All</a>
      </div>
    </div>
    <div>
      <h1>Foster</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className="btn-container">
        <a className="btn btn--accent" href="#">Learn How</a>
      </div>
    </div>
    <div>
      <h1>Donate</h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
      </p>
      <div className="btn-container">
        <a className="btn btn--accent" href="#">More Info</a>
      </div>
    </div>
  </div>
)

export default HomeLinks