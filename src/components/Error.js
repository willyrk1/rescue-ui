import React from 'react'
import StandardLayout from './StandardLayout'
import ErrorImage from '../assets/images/error-lolcat-problemz.jpg'
import { useLocation } from 'react-router-dom'

export default function Error() {
  const { state } = useLocation()
  return (
    <>
      <h1>An Error Has Occurred</h1>

      <p>Well this is embarrassing, we're working on it right meow!</p>

      <img alt="" src={ErrorImage} />

      <p style={{ marginTop: 30 }}>Error: {state.message}</p>
    </>
  )
}

export const ErrorPage = () => (
  <StandardLayout>
    <Error />
  </StandardLayout>
)
