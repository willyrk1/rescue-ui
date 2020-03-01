/* jshint esversion: 6 */

const env = process.env.REACT_APP_LOCAL || 'dev'

const { hostName, protocol } = {
  dev: {
    protocol: 'https',
    hostName: 'stfrancisrescue.org',
  },
  stage: {
    protocol: 'http',
    hostName: 'staging.stfrancisrescue.org',
  },
}[env]

export const PROTOCOL = protocol
//export const HOSTNAME = "0.0.0.0:8080"
export const HOSTNAME = hostName
export const ROOT_URL = "/"
