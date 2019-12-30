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
import Adopt from './components/Adopt'
import Mission from './components/Mission';
import HelpOurCause from './components/HelpOurCause'
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Contact from './components/Contact';
import Events from './components/Events';
import WorkingCats from './components/WorkingCats';
import Page from './components/Page';
import SuccessStories from './components/SuccessStories';
import Donate from './components/Donate';
import UnderConstruction from './components/UnderConstruction';
import './App.scss';

const App = () => (
  <Router basename='/rescue-ui'>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/adoptions" component={Adopt} />
      <Route exact path="/mission" component={Mission} />
      <Route exact path="/help-our-cause" component={HelpOurCause} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/success-stories" component={SuccessStories} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/working-cats" component={WorkingCats} />
      <Route exact path="/donate" component={Donate} />
      <Route path="/:pagename" component={Page} />
      <Route component={UnderConstruction} />
    </Switch>
  </Router>
)

export default App
