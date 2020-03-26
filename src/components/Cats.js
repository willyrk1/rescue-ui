import React from 'react'
import AdoptableLists from './AdoptableLists'

const Cats = () =>
  <AdoptableLists
    petType='cats'
    lists={[
      {
        property: 'adoptionCenterAnimals',
        title: 'Cats at Adoption Centers',
      },
      {
        property: 'fosteredAnimals',
        title: 'Cats in Foster Homes',
      },
    ]}
  >
    {({ adoptionCenters } = {}) =>
      <>
        <h1>Our Cats</h1>

        {adoptionCenters && adoptionCenters.length > 0 &&
          <p>Some of our cats ready for adoption can be seen at the following
            Adoption Centers, which will be listed in their story.
          </p>
        }

        <p>
          For cats located in foster homes, you can contact the foster
          directly if you have questions about the cat. Otherwise, click on
          the 'Want to Adopt Me?' button next to a cat, fill out the adoption
          form and someone will contact you.
        </p>
      </>
    }
  </AdoptableLists>

export default Cats
