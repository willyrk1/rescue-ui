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
        <a href="/"><div id="logo"/></a>
        <ul className="Navigation">
          <li><Link to="/"><i className="material-icons">home</i></Link></li>
          <li><Link to="/mission">Mission</Link></li>
          <li><Link to="/cats">Cats</Link></li>
          <li><Link to="/dogs">Dogs</Link></li>
          <li><Link to="/adoptions">Adoptions</Link></li>
          <li><Link to="/foster">Foster</Link></li>
          <li><Link to="/volunteer">Volunteer</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/rescues">Rescues</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/success_stories">Success Stories</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </div>
  );
}

export default Header;
