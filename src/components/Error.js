import React from 'react'
import StandardLayout from './StandardLayout'
import ErrorImage from '../assets/images/error-lolcat-problemz.jpg'

const Error = () => (
  <>
    <h1>An Error Has Occurred</h1>

    <p>Well this is embarrassing, we're working on it right meow!</p>

    <img alt="" src={ErrorImage} />
  </>
)

export const ErrorPage = () => (
  <StandardLayout>
    <Error />
  </StandardLayout>
)

export default Error
