import React, { useEffect, useReducer, useState } from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import AnimalCard from './AnimalCard'
import AnimalSearch from './AnimalSearch'
import styles from './AdoptableLists.module.scss'
import { usePetData } from '../context/PetDataContext'

const cx = classNames.bind(styles)

const getUniqueOptions = (pets, lists, mappingFn) => [...new Set(
  lists.reduce((acc, { property }) => {
    acc.push(...pets[property].map(mappingFn))
    return acc
  }, [])
)].map(value => ({ value, label: value }))

const getDaysAgo = days => new Date() - days * 1000 * 60 * 60 * 24

const AdoptableList = ({ petType, lists, children }) => {
  const selectMapping = {
    gender: { mappingFn: pet => pet.sex, label: 'Gender' },
    breed: { mappingFn: ({ dominant_breed }) => dominant_breed.name, label: 'Breed' },
    color: { mappingFn: ({ animal_color }) => animal_color.name, label: 'Color' },
    furLength: { mappingFn: pet => pet.fur_length, label: 'Fur Length' },
    declawed: { mappingFn: pet => pet.declawed, label: 'Declawed' },
    goodWithChildren: { mappingFn: pet => pet.good_with_children, label: 'Good with Children' },
    goodWithCats: { mappingFn: pet => pet.good_with_cats, label: 'Good with Cats' },
    goodWithDogs: { mappingFn: pet => pet.good_with_dogs, label: 'Good with Dogs' },
  }

  const [state, dispatch] = useReducer((state, { type, pets, ...params }) => {
    switch (type) {
      case 'INITIALIZE':
        return {
          ...state,
          pets,
          search: {
            name: {},
            age: {
              label: 'Age',
              choices: [{
                value: '<6m',
                label: 'Under 6 months',
                min: getDaysAgo(6 * 30),
              }, {
                value: '6m-1y',
                label: '6 months to 1 year',
                max: getDaysAgo(6 * 30),
                min: getDaysAgo(365),
              }, {
                value: '>1y',
                label: 'over 1 year',
                max: getDaysAgo(365),
              }]
            },
            ...Object.entries(selectMapping).reduce((acc, [prop, { mappingFn, label }]) => {
              acc[prop] = { choices: getUniqueOptions(pets, lists, mappingFn), label }
              return acc
            }, {})
          }
        }
      case 'STORE_INPUT':
        return {
          ...state,
          search: {
            ...state.search,
            [params.prop]: {
              ...state.search[params.prop],
              input: params.value,
            }
          },
        }
      case 'CLEAR_INPUT':
        return {
          ...state,
          search: {
            ...state.search,
            ...Object.entries(state.search).reduce((acc, [prop, { input, ...rest }]) => {
              acc[prop] = rest
              return acc
            }, {})
          },
        }
      case 'SET':
        return {
          ...state,
          search: {
            ...state.search,
            ...Object.entries(state.search).reduce((acc, [prop, { input, ...rest }]) => {
              acc[prop] = { input, ...rest, value: input }
              return acc
            }, {})
          },
        }
      default:
        break
    }
  }, { search: { name: {}, age: {}}})

  const petData = usePetData()
  
  useEffect(() => {
    if (petData) {
      dispatch({ type: 'INITIALIZE', pets: petData[petType]})
    }
  }, [petData])

  const {
    pets,
    search,
    search: { name: { value: searchName }, age: { value: searchAge }, ...searchSelects }
  } = state

  const [pageNums, setPageNums] = useState({})

  // If there are searches, then filter.  Otherwise, slice the given page.
  const processList = (collection, pageNum) => {
    if (collection) {
      if (Object.values(search).some(({ value }) => value)) {
        return collection.filter(({ name, date_of_birth, ...rest }) =>
          name.toUpperCase().includes((searchName || '').toUpperCase())
          && (!searchAge || (
            (!searchAge.min || new Date(date_of_birth) > searchAge.min) &&
            (!searchAge.max || new Date(date_of_birth) <= searchAge.max)
          ))
          && Object.entries(selectMapping).every(([prop, { mappingFn }]) =>
            !searchSelects[prop].value || searchSelects[prop].value.value === mappingFn(rest)
          )
        )
      }
      else {
        return collection //.slice(50 * (pageNum || 0), 50 * (1 + (pageNum || 0)))
      }
    }
    else {
      return null
    }
  }

  const processedLists = pets && lists.map(({ title, property }) => ({
    title,
    property,
    processedList: processList(pets[property], pageNums[property])
  }))

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {(processedLists && processedLists.some(({ processedList }) => processedList.length)) ? (
        processedLists.map(({ title, processedList, property }) => !!processedList.length &&
          <div className={cx('adoptable-list')} key={title}>
            <div className={cx('search')}>
              <AnimalSearch {...{ state, dispatch }} />
            </div>
            <h2>{title}</h2>
            <div>
              {processedList.map(pet =>
                <AnimalCard petType={petType} pet={pet} list={property} key={pet.id} />
              )}
            </div>
          </div>
        )
      ) : (
        <div className={cx('search')}>
          <AnimalSearch {...{ state, dispatch }} />
        </div>
      )}

    </StandardLayout>
  )
}

export default AdoptableList
