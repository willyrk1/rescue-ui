import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MatomoProvider value={matomoInstance}>
    <App />
  </MatomoProvider>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
