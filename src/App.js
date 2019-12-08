/********************************************************************************
 * App component
 *
 * Core application component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Mission from './components/Mission';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Page from './components/Page';
import SuccessStories from './components/SuccessStories';
import UnderConstruction from './components/UnderConstruction';
import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mission" component={Mission} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/success_stories" component={SuccessStories} />
      <Route path="/:pagename" component={Page} />
      <Route component={UnderConstruction} />
    </Switch>
  </Router>
)

export default App
