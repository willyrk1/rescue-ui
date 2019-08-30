/********************************************************************************
 * UnderConstruction function
 *
 * Default placeholder for a page
 * Logs routing information to the console in case we arrive here on error
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import SpinningLogo from '../components/SpinningLogo';

const UnderConstruction = (props) => {
    console.log("Why am I here?", props);
    return (
        <div id="underconstruction">
		  <h4>Future Page for: {props.location.pathname}</h4>
          <div className="centered">
			<SpinningLogo />
		  </div>
        </div>
    );
};

export default UnderConstruction;
