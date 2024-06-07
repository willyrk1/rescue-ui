import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react'
import './assets/stylesheets/_variables.scss'
import './assets/stylesheets/style.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Google Analytics
ReactGA.initialize('G-V7S2C8XPMR');
ReactGA.send("pageview");
// ReactGA.send({ hitType: 'pageview', page: window.location.hash || window.location.pathname});

// Matomo
const matomoInstance = createInstance({
  urlBase: 'https://analytics.pothoven.net/',
  siteId: 8,
  linkTracking: false,
})

// Old react-router-dom used to auto redirect to the route basename
// if the user navigated to the root ('/') path, but no longer.
// This ensures the user goes to the React route.  It's a bit of a hack.
// see https://github.com/remix-run/react-router/issues/8427
if (!window.location.hash.includes('#/rescue-ui')) {
  window.history.replaceState(
    '',
    '',
    '#/rescue-ui' + window.location.pathname
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MatomoProvider value={matomoInstance}>
    <App />
  </MatomoProvider>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
