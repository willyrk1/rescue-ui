import React, { useState } from 'react'
import classNames from 'classnames'
import './Sponsors.scss'
import spectrumLogo from '../../assets/images/Spectrum-logo.png'
import gteLogo from '../../assets/images/GTE-financial-logo-Full-Color-2.png'
import gulfCoastLogo from '../../assets/images/Gulfcoast Veterinary Center.png'
import westChaseLogo from '../../assets/images/Westchase_Veterinary_Center_and_Emergenc.png'

const Sponsors = () => {
  const [ scrollIndex, setScrollIndex ] = useState(0)

  return (
    <div className='home-sponsors'>
      <div>
        <h1>Our Sponsors</h1>
        <hr/>
      </div>
      <div className='arrow'>
        <h1>
          <a href="#" onClick={event => { setScrollIndex(scrollIndex + 1); event.preventDefault();}}>
            &lt;
          </a>
        </h1>
      </div>
      <div className='tiles'>
        {[
          <img src={spectrumLogo} />,
          <img src={gteLogo} />,
          <img src={gulfCoastLogo} />,
          <img src={westChaseLogo} />,
          <img src={spectrumLogo} />,
          <img src={gteLogo} />,
          <img src={gulfCoastLogo} />,
          <img src={westChaseLogo} />,
        ].map((logo, index, ary) => {
          const adjustedIndex = (((index - scrollIndex + 1) % ary.length) + ary.length) % ary.length
          return (
            <div
              className={classNames({
                hide: !adjustedIndex || adjustedIndex === ary.length - 1
              })}
              style={{ left: `${(adjustedIndex - 1) * 20}rem` }}
            >
              {logo}
            </div>
          )
        })}
      </div>
      <div className='arrow'>
        <h1>
          <a href="#" onClick={event => { setScrollIndex(scrollIndex - 1); event.preventDefault();}}>
            &gt;
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Sponsors