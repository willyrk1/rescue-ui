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
  async function post(url, body, jwt) {
    const headers = {
      Authorization: `Basic ${jwt}`,
      accept: 'application/json',
    }

    log('REQUEST  :=', url)

    try {
      const response = await fetch(url, { method: 'POST', headers, body, redirect: 'manual' })
      if (response.type === 'opaqueredirect') {
        log('RESPONSE :=')
      }
      else {
        if (!response.ok) {
          const errorText = await response.text()
          console.error(response)
          throw Error(`(${response.status}) ${errorText}`)
        }
        
        const data = await response.json()
        log('RESPONSE :=', data)
        return data
      }
    }
    catch (error) {
      log('ERROR :=', error)
      throw error
    }
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

    postForm: (event, excludeList = []) => {
      event.preventDefault()
      const formData = new FormData(event.target)

      /*
       * Fix phone inputs.
       */
      const tels = event.target.querySelectorAll('input[type="tel"]')
      ;[...tels].forEach(({ name, value }) => {
        formData.set(
          name,
          value.replace(/[-.]/g, '').replace(/(.{3})(.{3})(.{4})/, '$1-$2-$3')
        )
      })

      excludeList.forEach(key => formData.delete(key))

      return post(event.target.action, formData, TOKEN)
    },
  }
})()

export default StFrancisRescue
