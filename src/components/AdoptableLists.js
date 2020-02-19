import React, { useEffect, useReducer } from 'react'
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
      acc.push(...pets[property].map(pet =>
        typeof animalProperty === 'function' ? animalProperty(pet) : pet[animalProperty]
      ))
      return acc
    }, [])
  )].map(value => ({ value, label: value }))

  const [state, dispatch] = useReducer((state, { type, pets, ...params }) => {
    switch (type) {
      case 'INITIALIZE':
        return {
          ...state,
          pets,
          genderChoices: getUniqueOptions(pets, 'sex'),
          breedChoices: getUniqueOptions(pets, ({ dominant_breed }) => dominant_breed.name),
          colorChoices: getUniqueOptions(pets, ({ animal_color }) => animal_color.name),
          ageChoices: [
            { value: '<6m', label: 'Under 6 months' },
            { value: '6m-1y', label: '6 months to 1 year' },
            { value: '>1y', label: 'over 1 year' },
          ],
        }
      case 'SET':
        return { ...state, ...params }
      default:
        break
    }
  }, { pets: {} })

  useEffect(() => {
    const loadPets = async () => {
      const { data: pets } = await getPets(StFrancisRescue)
      dispatch({ type: 'INITIALIZE', pets})
    }
    loadPets()
  }, [getPets])

  const { pets, searchName, searchGender, searchBreed, searchColor, searchAge } = state

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {pets && lists.map(({ property, title }) =>
        pets[property] && pets[property].length &&
          <div className={cx('adoptable-list')} key={property}>
            <AnimalSearch {...{ cx, state, dispatch }} />
            <h2>{title}</h2>
            <div>
              {pets[property]
                // .filter(({ youtube_url }) => youtube_url)
                .filter(({
                  name, sex,
                  dominant_breed: { name: breed },
                  animal_color: { name: color },
                }) => name.toUpperCase().includes((searchName || '').toUpperCase())
                  && (!searchGender || sex === searchGender.value)
                  && (!searchBreed || breed === searchBreed.value)
                  && (!searchColor || color === searchColor.value)
                )
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
