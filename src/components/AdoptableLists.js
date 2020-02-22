import React, { useEffect, useReducer, useState } from 'react'
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

  const getDaysAgo = days => new Date() - days * 1000 * 60 * 60 * 24

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
            {
              value: '<6m',
              label: 'Under 6 months',
              min: getDaysAgo(6 * 30),
            },
            {
              value: '6m-1y',
              label: '6 months to 1 year',
              max: getDaysAgo(6 * 30),
              min: getDaysAgo(365),
            },
            {
              value: '>1y',
              label: 'over 1 year',
              max: getDaysAgo(365),
            },
          ],
          furLengthChoices: getUniqueOptions(pets, 'fur_length'),
          declawedChoices: getUniqueOptions(pets, 'declawed'),
          goodWithChildrenChoices: getUniqueOptions(pets, 'good_with_children'),
          goodWithCatsChoices: getUniqueOptions(pets, 'good_with_cats'),
          goodWithDogsChoices: getUniqueOptions(pets, 'good_with_dogs'),
        }
      case 'SET':
        return { ...state, ...params }
      default:
        break
    }
  }, {})

  useEffect(() => {
    const loadPets = async () => {
      const { data: pets } = await getPets(StFrancisRescue)
      dispatch({ type: 'INITIALIZE', pets})
    }
    loadPets()
  }, [getPets])

  const {
    pets, searchName, searchGender, searchBreed, searchColor, searchAge, searchFurLength,
    searchDeclawed, searchGoodWithChildren, searchGoodWithCats, searchGoodWithDogs,
  } = state

  const doingSearch = searchName || searchGender || searchBreed || searchColor ||
    searchFurLength || searchDeclawed || searchGoodWithChildren || searchGoodWithCats ||
    searchGoodWithDogs || searchAge

  const [pageNums, setPageNums] = useState({})

  // If there are searches, then filter.  Otherwise, slice the given page.
  const processList = (collection, pageNum) => {
    if (collection) {
      if (doingSearch) {
        return collection.filter(({
          name, sex, fur_length, declawed, date_of_birth,
          dominant_breed: { name: breed }, animal_color: { name: color },
          good_with_children, good_with_cats, good_with_dogs,
        }) => name.toUpperCase().includes((searchName || '').toUpperCase())
          && (!searchGender || sex === searchGender.value)
          && (!searchBreed || breed === searchBreed.value)
          && (!searchColor || color === searchColor.value)
          && (!searchFurLength || fur_length === searchFurLength.value)
          && (!searchDeclawed || declawed === searchDeclawed.value)
          && (!searchGoodWithChildren || good_with_children === searchGoodWithChildren.value)
          && (!searchGoodWithCats || good_with_cats === searchGoodWithCats.value)
          && (!searchGoodWithDogs || good_with_dogs === searchGoodWithDogs.value)
          && (!searchAge || (
            (!searchAge.min || new Date(date_of_birth) > searchAge.min) &&
            (!searchAge.max || new Date(date_of_birth) <= searchAge.max)
          ))
        )
      }
      else {
        return collection.slice(50 * (pageNum || 0), 50 * (1 + (pageNum || 0)))
      }
    }
    else {
      return null
    }
  }

  const processedLists = pets && lists.map(({ title, property }) => ({
    title,
    processedList: processList(pets[property], pageNums[property])
  }))

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {(processedLists && processedLists.some(({ processedList }) => processedList.length)) ? (
        processedLists.map(({ title, processedList }) => !!processedList.length &&
          <div className={cx('adoptable-list')} key={title}>
            <div className={cx('search')}>
              <AnimalSearch {...{ state, dispatch }} />
            </div>
            <h2>{title}</h2>
            <div>
              {processedList.map(pet => <AnimalCard pet={pet} key={pet.id} />)}
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
