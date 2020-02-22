import React, { useState } from 'react'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import StandardForm from './StandardForm'
import styles from './AnimalSearch.module.scss'

const cx = classNames.bind(styles)

const AnimalSearch = ({
  dispatch,
  state: {
    genderChoices, breedChoices, colorChoices, ageChoices, furLengthChoices, declawedChoices,
    goodWithChildrenChoices, goodWithCatsChoices, goodWithDogsChoices,
    ...rest,
  },
}) => {
  const [searches, setSearches] = useState(rest)

  const {
    searchName, searchGender, searchBreed, searchColor, searchAge, searchFurLength,
    searchDeclawed, searchGoodWithChildren, searchGoodWithCats, searchGoodWithDogs
  } = searches

  const setInput = property => ({ target }) => setSearches({ ...searches, [property]: target.value })
  const setSelect = property => value => setSearches({ ...searches, [property]: value })

  const SelectOverride = props =>
    <StandardForm.Select {...props} isClearable className={cx('search-select')} />

  return (
    <Popup
      modal
      closeOnDocumentClick
      trigger={<button className={cx('btn')}>Search</button>}
    >
      {close =>
        <div className={cx('search-content')}>
          <StandardForm>
            <ul>
              <li>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  value={searchName}
                  onChange={setInput('searchName')}
                  className={cx('search-input')}
                />
              </li>
              <li>
                <label htmlFor='gender'>Gender</label>
                <SelectOverride
                  id='gender'
                  options={genderChoices}
                  value={searchGender}
                  onChange={setSelect('searchGender')}
                />
              </li>
              <li>
                <label htmlFor='breed'>Breed</label>
                <SelectOverride
                  id='breed'
                  options={breedChoices}
                  value={searchBreed}
                  onChange={setSelect('searchBreed')}
                />
              </li>
              <li>
                <label htmlFor='color'>Color</label>
                <SelectOverride
                  id='color'
                  options={colorChoices}
                  value={searchColor}
                  onChange={setSelect('searchColor')}
                />
              </li>
              <li>
                <label htmlFor='age'>Age</label>
                <SelectOverride
                  id='age'
                  options={ageChoices}
                  value={searchAge}
                  onChange={setSelect('searchAge')}
                />
              </li>
              <li>
                <label htmlFor='furLength'>Fur Length</label>
                <SelectOverride
                  id='furLength'
                  options={furLengthChoices}
                  value={searchFurLength}
                  onChange={setSelect('searchFurLength')}
                />
              </li>
              <li>
                <label htmlFor='declawed'>Declawed</label>
                <SelectOverride
                  id='declawed'
                  options={declawedChoices}
                  value={searchDeclawed}
                  onChange={setSelect('searchDeclawed')}
                />
              </li>
              <li>
                <label htmlFor='goodWithChildren'>Good with Children</label>
                <SelectOverride
                  id='goodWithChildren'
                  options={goodWithChildrenChoices}
                  value={searchGoodWithChildren}
                  onChange={setSelect('searchGoodWithChildren')}
                />
              </li>
              <li>
                <label htmlFor='goodWithCats'>Good with Cats</label>
                <SelectOverride
                  id='goodWithCats'
                  options={goodWithCatsChoices}
                  value={searchGoodWithCats}
                  onChange={setSelect('searchGoodWithCats')}
                />
              </li>
              <li>
                <label htmlFor='goodWithDogs'>Good with Dogs</label>
                <SelectOverride
                  id='goodWithDogs'
                  options={goodWithDogsChoices}
                  value={searchGoodWithDogs}
                  onChange={setSelect('searchGoodWithDogs')}
                />
              </li>
            </ul>
            <div className={cx('actions')}>
              <button
                className={cx('btn')}
                onClick={() => {
                  dispatch({ type: 'SET', ...searches })
                  close()
                }}
              >
                Search
              </button>
              <button className={cx('btn')} onClick={() => setSearches({})}>
                Clear
              </button>
              <button className={cx('btn')} onClick={() => close()}>
                Cancel
              </button>
            </div>
          </StandardForm>
        </div>
      }
    </Popup>
  )
}

export default AnimalSearch
