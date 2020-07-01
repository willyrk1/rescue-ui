import React from 'react'
import { Link } from 'react-router-dom'

const AnimalLink = ({ petType, list, pet: { id }, children, className }) => (
  <Link to={`./pet-details/${petType}/${list}/${id}`} className={className}>
    {children}
  </Link>
)

export default AnimalLink
