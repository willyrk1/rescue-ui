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
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import ReactGA from 'react-ga4'
import { useMatomo } from '@datapunt/matomo-tracker-react'
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
import DonateQR from './components/DonateQR'
import ForeverFoster from './components/ForeverFoster'
import PrivacyPolicy from './components/PrivacyPolicy'
import FormSubmitted from './components/FormSubmitted'
import Legacy from './components/Legacy'
import UnderConstruction from './components/UnderConstruction'
import { ErrorPage } from './components/Error'
import './App.scss'
import VolunteerFormSubmitted from './components/VolunteerFormSubmitted'
import LostAPet from './components/LostAPet'


const ScrollToTop = () => {
  const navigate = useNavigate()
  const { trackPageView } = useMatomo()

  useEffect(() => {
    if (navigate.action === 'PUSH') {
      window.scrollTo(0, 0);
      ReactGA.set({ page: navigate.location.pathname });
      ReactGA.send({ hitType: 'pageview', page: navigate.location.hash || navigate.location.pathname });
      trackPageView({ href: navigate.location.pathname});
    }
  }, [navigate.location, navigate.action, trackPageView])

  return null
}

const App = () => (
  <Router basename='rescue-ui'>
    <ScrollToTop />
    <GlobalDataProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/adoptions" element={<Adopt/>} />
        <Route exact path="/before-you-adopt" element={<BeforeYouAdopt/>} />
        <Route exact path="/mission" element={<Mission/>} />
        <Route exact path="/volunteer" element={<Volunteer/>} />
        <Route exact path="/volunteer-form" element={<VolunteerForm/>} />
        <Route exact path="/help-our-cause" element={<HelpOurCause/>} />
        <Route exact path="/lost-a-pet" element={<LostAPet/>} />
        <Route exact path="/cats" element={<Cats/>} />
        <Route exact path="/dogs" element={<Dogs/>} />
        <Route
          exact
          path="/pet-details/:petType/:list/:animalId"
          element={<AnimalDetails />}
        />
        <Route
          exact
          path="/adoption-form/:petType/:list/:animalId"
          element={<AdoptionForm />}
        />
        <Route exact path="/success-stories" element={<SuccessStories/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/adoption-locations" element={<AdoptionLocations/>} />
        <Route exact path="/working-cats" element={<WorkingCats/>} />
        <Route exact path="/working-cats-form" element={<WorkingCatsForm/>} />
        <Route exact path="/donate" element={<Donate/>} />
        <Route exact path="/donateQR" element={<DonateQR/>} />
        <Route exact path="/forever-foster" element={<ForeverFoster/>} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route exact path="/form-submitted" element={<FormSubmitted/>} />
        <Route exact path="/volunteer-form-submitted" element={<VolunteerFormSubmitted/>} />
        <Route exact path="/special-need/:reference" element={<Legacy/>} />
        <Route exact path="/error" element={<ErrorPage/>} />
        <Route path="/:pagename" element={<Page/>} />
        <Route element={<UnderConstruction/>} />
      </Routes>
    </GlobalDataProvider>
  </Router>
)

export default App
