/* jshint esversion: 6 */

const env = process.env.REACT_APP_LOCAL || 'dev'

const { hostName, protocol, token } = {
  dev: {
    protocol: 'https',
    hostName: 'stfrancisrescue.org',
    token: 'unknown',
  },
  staging: {
    protocol: 'https',
    hostName: '',
    token: 'c3RhZ2luZzpwYXNzdzByZA==',
  },
  test: {
    protocol: 'https',
    hostName: 'test.stfrancisrescue.org',
    token: 'c3RhZ2luZzpwYXNzdzByZA==',
  },
  production: {
    protocol: 'https',
    hostName: '',
    token: 'unknown',
  },
}[env]

export const PROTOCOL = protocol
//export const HOSTNAME = "0.0.0.0:8080"
export const HOSTNAME = hostName
export const ROOT_URL = '/'
export const TOKEN = token
export const URI = HOSTNAME ? `${PROTOCOL}://${HOSTNAME}` : ''
