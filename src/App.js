/********************************************************************************
 * App component
 *
 * Core application component for the Rescue UI.
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import { GlobalDataProvider } from './context/GlobalDataContext'
import Home from './components/Home/Home'
import Adopt from './components/Adopt'
import BeforeYouAdopt from './components/BeforeYouAdopt'
import Mission from './components/Mission'
import Volunteer from './components/Volunteer'
import VolunteerForm from './components/VolunteerForm'
import HelpOurCause from './components/HelpOurCause'
import Cats from './components/Cats'
import Dogs from './components/Dogs'
import AdoptionForm from './components/AdoptionForm'
import AnimalDetails from './components/AnimalDetails'
import Contact from './components/Contact'
import AdoptionLocations from './components/AdoptionLocations'
import WorkingCats from './components/WorkingCats'
import WorkingCatsForm from './components/WorkingCatsForm'
import Page from './components/Page'
import SuccessStories from './components/SuccessStories'
import Donate from './components/Donate'
import ForeverFoster from './components/ForeverFoster'
import PrivacyPolicy from './components/PrivacyPolicy'
import FormSubmitted from './components/FormSubmitted'
import UnderConstruction from './components/UnderConstruction'
import './App.scss'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => (
  <Router basename="/">
    <ScrollToTop />
    <GlobalDataProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adoptions" component={Adopt} />
        <Route exact path="/before-you-adopt" component={BeforeYouAdopt} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/volunteer-form" component={VolunteerForm} />
        <Route exact path="/help-our-cause" component={HelpOurCause} />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/dogs" component={Dogs} />
        <Route
          exact
          path="/pet-details/:petType/:list/:animalId"
          component={AnimalDetails}
        />
        <Route
          exact
          path="/adoption-form/:petType/:list/:animalId"
          component={AdoptionForm}
        />
        <Route exact path="/success-stories" component={SuccessStories} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/adoption-locations" component={AdoptionLocations} />
        <Route exact path="/working-cats" component={WorkingCats} />
        <Route exact path="/working-cats-form" component={WorkingCatsForm} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/forever-foster" component={ForeverFoster} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/form-submitted" component={FormSubmitted} />
        <Route path="/:pagename" component={Page} />
        <Route component={UnderConstruction} />
      </Switch>
    </GlobalDataProvider>
  </Router>
)

export default App
