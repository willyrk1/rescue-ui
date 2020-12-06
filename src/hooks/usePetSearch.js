import { useEffect, useState } from 'react'
import { usePetData } from '../context/GlobalDataContext'

const getUniqueOptions = (pets, lists, mappingFn) =>
  [
    ...new Set(
      lists.reduce((acc, { property }) => {
        acc.push(...pets[property].map(mappingFn))
        return acc
      }, [])
    ),
  ].map(value => ({ value, label: value }))

const getDaysAgo = days => new Date() - days * 1000 * 60 * 60 * 24

const selectMapping = {
  specialNeeds: {
    mappingFn: pet => (!!pet.special_need_id).toString(),
    label: 'Special Needs',
    choices: [
      { label: 'No', value: 'false' },
      { label: 'Yes', value: 'true' },
    ],
  },
  gender: { mappingFn: pet => pet.sex, label: 'Gender' },
  breed: {
    mappingFn: ({ dominant_breed }) => dominant_breed.name,
    label: 'Breed',
  },
  color: {
    mappingFn: ({ animal_color }) => animal_color.name,
    label: 'Color',
  },
  furLength: { mappingFn: pet => pet.fur_length, label: 'Fur Length' },
  declawed: {
    mappingFn: pet => pet.declawed,
    label: 'Declawed',
    choices: ['No', 'Yes'].map(value => ({ label: value, value })),
  },
  goodWithChildren: {
    mappingFn: pet => pet.good_with_children,
    label: 'Good with Children',
  },
  goodWithCats: {
    mappingFn: pet => pet.good_with_cats,
    label: 'Good with Cats',
  },
  goodWithDogs: {
    mappingFn: pet => pet.good_with_dogs,
    label: 'Good with Dogs',
  },
}

/*
 * Takes a petType (cats/dogs) and an array of lists (fosters, special-needs, etc.),
 * and returns a list of search properties and choices based on those parameters among
 * the global pet data in memory (usePetData).
 */
const usePetSearch = (petType, lists) => {
  const petData = usePetData()

  const [searchChoices, setSearchChoices] = useState()

  useEffect(() => {
    if (petData && petType && lists) {
      setSearchChoices({
        name: {},
        age: {
          label: 'Age',
          choices: [
            {
              label: 'Under 6 months',
              value: '<6m',
              min: getDaysAgo(6 * 30),
            },
            {
              label: '6 months to 1 year',
              value: '6m-1y',
              max: getDaysAgo(6 * 30),
              min: getDaysAgo(365),
            },
            {
              label: 'over 1 year',
              value: '>1y',
              max: getDaysAgo(365),
            },
          ],
        },
        ...Object.entries(selectMapping).reduce(
          (acc, [prop, { mappingFn, label, choices }]) => {
            acc[prop] = {
              choices:
                choices || getUniqueOptions(petData[petType], lists, mappingFn),
              label,
              mappingFn,
            }
            return acc
          },
          {}
        ),
      })
    }
  }, [petData, petType, lists])

  return searchChoices
}

export default usePetSearch
