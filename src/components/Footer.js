/********************************************************************************
 * Footer component
 *
 * Footer component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import './Footer.scss';

function Footer() {
    const year = (new Date()).getFullYear();
    
  return (
      <div className="Footer" id="footer">
          <p>© {year} St. Francis Society Animal Rescue. Contact | Privacy Policy | St. Francis Society Animal Rescue PO Box 261614 Tampa, FL 33685-1614</p>
      </div>
  );
}

export default Footer;
