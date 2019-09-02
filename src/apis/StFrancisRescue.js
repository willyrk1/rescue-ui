/********************************************************************************
 * St. Francis Rescue API
 *
 * Simple JavaScript wrapper for the St. Francis Rescue API
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import { PROTOCOL, HOSTNAME, ROOT_URL } from '../config/StFrancisRescue';

const StFrancisRescue = function() {
    var log = console.log;

    /*
     * helper function for fetch to correctly throw an error when a response has an error code
     */
    function checkFetchResponseOK(response) {
        if (!response.ok) {
            console.error(response);
            throw Error(`${response.status} - ${response.statusText}`);
        }
        return response;
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
        let queryString;
        if (params) {
            queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        }
        let url = `${PROTOCOL}://${HOSTNAME}${ROOT_URL}${endpoint}`;
        if (queryString) {
            url += `?${queryString}`;
        }
        let headers = {
            "accept": "application/json"
        };
        if (jwt) {
            headers.Authorization = "Bearer " + jwt;
        }

        log("REQUEST  :=", url);
        
        return fetch(url, { headers: headers })
            .then(checkFetchResponseOK)
            .then(response => response.json()) // parses response to JSON
            .then(data => {
                log("RESPONSE :=", data);
                return data;
            });

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
    /*
    function post(endpoint, params, jwt) {
        let url = `${PROTOCOL}://${HOSTNAME}${ROOT_URL}${endpoint}`;
        let headers = {
            "accept"       : "application/json",
            "Content-Type" : "application/json"
        };
        if (jwt) {
            headers.Authorization = "Bearer " + jwt;
        }

        log("REQUEST  :=", url, params);

        return fetch(url, {
            method  : "POST",
            headers : headers,
            body    : JSON.stringify(params) 
        })
            .then(checkFetchResponseOK)
            .then(response => response.json())
            .then(data => {
                log("RESPONSE :=", data);
                return data;
            });
    }
    */
    
    return {

        setLog : function(logFn) {
            if (typeof logFn === "function") {
                log = logFn;
            }
        },


        getCats : function(params) {
            return get(`animals/cats`, params);
        },

        getDogs : function(params) {
            return get(`animals/dogs`, params);
        },

        getBoardMembers : function(params) {
            return get(`mission`, params);
        }
    };
    
}();

export default StFrancisRescue;
