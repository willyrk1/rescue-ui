import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import StandardLayout from './StandardLayout'
import AnimalCard from './AnimalCard'
import AnimalSearch from './AnimalSearch'
import styles from './AdoptableLists.module.scss'

const cx = classNames.bind(styles)

const getUniqueOptions = animalProperty => (pets, lists) => [...new Set(
  lists.reduce((acc, { property }) => {
    acc.push(...pets[property].map(pet =>
      typeof animalProperty === 'function' ? animalProperty(pet) : pet[animalProperty]
    ))
    return acc
  }, [])
)].map(value => ({ value, label: value }))

const getDaysAgo = days => new Date() - days * 1000 * 60 * 60 * 24

const AdoptableList = ({ getPets, lists, children }) => {
  const [pets, setPets] = useState([])

  const [criteria, setCriteria] = useState([{
    inputType: 'text',
    label: 'Name',
  }, {
    inputType: 'select',
    label: 'Gender',
    choiceFn: getUniqueOptions('sex'),
  }, {
    inputType: 'select',
    label: 'Breed',
    choiceFn: getUniqueOptions(({ dominant_breed }) => dominant_breed.name),
  }, {
    inputType: 'select',
    label: 'Color',
    choiceFn: getUniqueOptions(({ animal_color }) => animal_color.name),
  }, {
    inputType: 'select',
    label: 'Age',
    choiceFn: () => [
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
  }, {
    inputType: 'select',
    label: 'Fur Length',
    choiceFn: getUniqueOptions('fur_length'),
  }, {
    inputType: 'select',
    label: 'Declawed',
    choiceFn: getUniqueOptions('declawed'),
  }, {
    inputType: 'select',
    label: 'Good with Children',
    choiceFn: getUniqueOptions('good_with_children'),
  }, {
    inputType: 'select',
    label: 'Good with Cats',
    choiceFn: getUniqueOptions('good_with_cats'),
  }, {
    inputType: 'select',
    label: 'Good with Dogs',
    choiceFn: getUniqueOptions('good_with_dogs'),
  }])

  useEffect(() => {
    const loadPets = async () => {
      const { data: pets } = await getPets(StFrancisRescue)
      setPets(pets)
      setCriteria(criteria => criteria.map(criterion => ({
        ...criterion,
        ...criterion.choiceFn ? { choices: criterion.choiceFn(pets, lists) } : null,
      })))
    }
    loadPets()
  }, [getPets, lists])

  const [pageNums, setPageNums] = useState({})

  // If there are searches, then filter.  Otherwise, slice the given page.
  const processList = (collection, pageNum) => {
    if (collection) {
      if (criteria.some(({ value }) => value)) {
        return collection.filter(({
          name, sex, fur_length, declawed, date_of_birth,
          dominant_breed: { name: breed }, animal_color: { name: color },
          good_with_children, good_with_cats, good_with_dogs,
        }) => criteria.every() name.toUpperCase().includes((searchName || '').toUpperCase())
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
