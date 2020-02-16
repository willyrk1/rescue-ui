/* jshint esversion: 6 */

const env = process.env.REACT_APP_LOCAL || 'dev'

const { hostName } = {
  dev: {},
  stage: {
    hostName: 'staging.stfrancisrescue.org'
  },
}[env]

export const PROTOCOL = "https";
//export const HOSTNAME = "0.0.0.0:8080";
export const HOSTNAME = hostName || "staging.stfrancisrescue.org";
export const ROOT_URL = "/";
