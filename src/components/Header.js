/********************************************************************************
 * Header component
 *
 * Header component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
      <div className="Header" id="header">
        <p>
          This is the header.
          <ul className="Navigation">
            <li><Link to="/"><i className="material-icons">home</i> Home</Link></li>
            <li><Link to="/cats">Cats</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
          </ul>
        </p>
      </div>
  );
}

export default Header;
