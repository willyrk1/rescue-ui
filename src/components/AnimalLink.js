import React from 'react'
import { Link } from 'react-router-dom'

const AnimalLink = ({ petType, list, pet: { id }, ...rest }) => (
  <Link to={`/pet-details/${petType}/${list}/${id}`} {...rest} />
)

export default AnimalLink
