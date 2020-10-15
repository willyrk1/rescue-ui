/********************************************************************************
 * St. Francis Rescue API
 *
 * Simple JavaScript wrapper for the St. Francis Rescue API
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import { PROTOCOL, HOSTNAME, ROOT_URL, TOKEN } from '../config/StFrancisRescue'

const StFrancisRescue = (function() {
  var log = console.log

  /*
   * helper function for fetch to correctly throw an error when a response has an error code
   */
  function checkFetchResponseOK(response) {
    if (!response.ok && response.type !== 'opaqueredirect') {
      console.error(response)
      throw Error(`${response.status} - ${response.statusText}`)
    }
    return response
  }

  /**
   * get
   *
   * basic GET request functionality to call an API endpoint
   *
   * Parameters:
   *   endpoint - the specific API endpoint
   *   params (optional) - hash of query parameters to pass in
   *   jwt (optional) - JWT token if the request need authentication
   *
   */
  function get(endpoint, params, jwt) {
    let queryString
    if (params) {
      queryString = Object.keys(params)
        .map(key => key + '=' + params[key])
        .join('&')
    }
    let url = `${PROTOCOL}://${HOSTNAME}${ROOT_URL}${endpoint}`
    if (queryString) {
      url += `?${queryString}`
    }
    let headers = {
      accept: 'application/json',
    }
    if (jwt) {
      headers.Authorization = 'Bearer ' + jwt
    }

    log('REQUEST  :=', url)

    return fetch(url, { headers: headers })
      .then(checkFetchResponseOK)
      .then(response => response.json()) // parses response to JSON
      .then(data => {
        log('RESPONSE :=', data)
        return data
      })
  }

  /**
   * post
   *
   * basic POST request functionality to call an API endpoint
   *
   * Parameters:
   *   endpoint          - the specific API endpoint
   *   params (optional) - hash of query parameters to pass in
   *   jwt (optional)    - JWT token if the request need authentication
   *
   */
  function post(url, body, jwt) {
    const headers = {
      Authorization: `Basic ${jwt}`,
      accept: 'application/json'
    }

    log('REQUEST  :=', url)

    return fetch(url, { method: 'POST', headers, body, redirect: 'manual' })
      .then(checkFetchResponseOK)
      .then(response =>
        response.type === 'opaqueredirect' ? '' : response.json()
      )
      .then(data => {
        log('RESPONSE :=', data)
        return data
      })
      .catch(error => {
        log('ERROR :=', error)
      })
  }

  return {
    setLog: function(logFn) {
      if (typeof logFn === 'function') {
        log = logFn
      }
    },

    getPage: function(pagename, params) {
      return get(pagename, params)
    },

    getCats: function(params) {
      return get('animals/cats', params)
    },

    getCourtesyCats: function(params) {
      return get('courtesy_animals/courtesy_cats', params)
    },

    getDogs: function(params) {
      return get('animals/dogs', params)
    },

    getSuccessStories: function(params) {
      return get('animals/success_stories', params)
    },

    getBoardMembers: function(params) {
      return get('mission', params)
    },

    getHeros: function(params) {
      return get('heros', params)
    },

    getLocations: function(params) {
      return get('locations', params)
    },

    getStats: function(params) {
      return get('stats', params)
    },

    postForm: event => {
      event.preventDefault()
      return post(event.target.action, new FormData(event.target), TOKEN)
    },
  }
})()

export default StFrancisRescue
