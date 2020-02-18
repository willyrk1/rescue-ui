import React, { useEffect, useState, useReducer } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import StandardLayout from './StandardLayout'
import AnimalCard from './AnimalCard'
import AnimalSearch from './AnimalSearch'
import styles from './AdoptableLists.module.scss'

const cx = classNames.bind(styles)

const AdoptableList = ({ getPets, lists, children }) => {
  const getUniqueOptions = (pets, animalProperty) => [...new Set(
    lists.reduce((acc, { property }) => {
      acc.push(...pets[property].map(({ [animalProperty]: value }) => value))
      return acc
    }, [])
  )].map(value => ({ value, label: value }))

  const [state, dispatch] = useReducer((state, pets) => ({
    pets,
    genderChoices: getUniqueOptions(pets, 'sex'),
  }), { pets: {} })

  const [searchName, setSearchName] = useState()
  const [searchGender, setSearchGender] = useState()

  useEffect(() => {
    const loadPets = async () => {
      const petData = getPets(StFrancisRescue)
      dispatch((await petData).data)
    }
    loadPets()
  }, [getPets])

  const { pets, genderChoices } = state

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {pets && lists.map(({ property, title }) =>
        pets[property] && pets[property].length &&
          <div className={cx('adoptable-list')} key={property}>
            <AnimalSearch
              {...{
                cx,
                searchName, setSearchName,
                genderChoices, searchGender, setSearchGender,
              }}
            />
            <h2>{title}</h2>
            <div>
              {pets[property]
                // .filter(({ youtube_url }) => youtube_url)
                .slice(0, 20)
                .map(pet => <AnimalCard pet={pet} key={pet.id} />)
              }
            </div>
          </div>
      )}

    </StandardLayout>
  )
}

export default AdoptableList
