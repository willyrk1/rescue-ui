/********************************************************************************
 * SpinningLogo function
 *
 * Show a spinning logo (defaults to React logo)
 *
 * author: Steven Pothoven (spothoven@intouchgps.com)
 ********************************************************************************/

import React from 'react';
import './SpinningLogo.scss';
import DEFAULT_LOGO from '../assets/images/logo.svg';

const SpinningLogo = (props) => {
    return (
      <div className="SpinningLogo">
          <img src={props.logo || DEFAULT_LOGO} className="SpinningLogo-logo" alt="logo" />
      </div>
    );
};

export default SpinningLogo;
