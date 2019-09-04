/********************************************************************************
 * Content component
 *
 * Content component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Mission from './Mission';
import Cats from './Cats';
import Dogs from './Dogs';
import Page from './Page';
import SuccessStories from './SuccessStories';
import UnderConstruction from './UnderConstruction';
import './Content.scss';

class Content extends Component {

    render() {
        return (
			<div className="Content" id="content">
              <Switch>
                <Route exact path="/" component={() => <Page pagename='home' />} />
                <Route exact path="/mission" component={Mission} />
                <Route exact path="/cats" component={Cats} />
                <Route exact path="/dogs" component={Dogs} />
                <Route exact path="/success_stories" component={SuccessStories} />
                <Route path="/:pagename" component={Page} />
                <Route component={UnderConstruction} />
              </Switch>
            </div>
		);
	}
}

export default Content;
