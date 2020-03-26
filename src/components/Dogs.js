import React from 'react'
import AdoptableLists from './AdoptableLists'

const Dogs = () =>
  <AdoptableLists
    petType='dogs'
    lists={[
      {
        property: 'fosteredAnimals',
        title: 'Fostered Dogs',
      },
    ]}
  >
    <h1>Our Dogs</h1>

    <p>
      Since all of our dogs live in foster homes and it is up to the
      foster family to transport for adoption events, we can not ensure
      that all dogs will be present. If you are interested in seeing a
      specific dog, please contact the person listed by phone or email to
      arrange a visit with the dog.
    </p>
  </AdoptableLists>
  
export default Dogs
