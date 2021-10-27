import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import './assets/stylesheets/_variables.scss'
import './assets/stylesheets/style.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Google Analytics
ReactGA.initialize('UA-6912841-1');
ReactGA.pageview(window.location.pathname);

// Matomo
const matomoInstance = createInstance({
  urlBase: 'https://analytics.pothoven.net/',
  siteId: 8,
  linkTracking: false,
})

ReactDOM.render(
  <MatomoProvider value={matomoInstance}>
    <App />
  </MatomoProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
