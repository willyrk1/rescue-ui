import React from 'react';
import './Hero.scss'
import heroImage from '../assets/images/hero.png'

class Hero extends React.Component {
  render() {
    return (
      <section className='banner'>
        <img src={heroImage} />
        <div>
          <h1>
            CUDDLE<br/>
            <span className='alt-color'>PARTY</span>
          </h1>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex, non vulputate
            enim est gravida enim. Suspendisse eu tortor dui.
          </p>
        </div>
      </section>
    );
  };
}


export default Hero;
