/********************************************************************************
 * Content component
 *
 * Content component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cats from './Cats';
import Dogs from './Dogs';
import UnderConstruction from './UnderConstruction';
import './Content.scss';

class Content extends Component {

    render() {
        return (
			<div className="Content" id="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cats" component={Cats} />
                <Route exact path="/dogs" component={Dogs} />
                <Route component={UnderConstruction} />
              </Switch>
            </div>
		);
	}
}

export default Content;
