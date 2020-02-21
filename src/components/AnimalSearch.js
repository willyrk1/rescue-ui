import React from 'react'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import StandardForm from './StandardForm'
import styles from './AnimalSearch.module.scss'

const cx = classNames.bind(styles)

const AnimalSearch = ({
  dispatch,
  state: {
    searchName,
    genderChoices, searchGender,
    breedChoices, searchBreed,
    colorChoices, searchColor,
    ageChoices, searchAge,
    furLengthChoices, searchFurLength,
    declawedChoices, searchDeclawed,
    goodWithChildrenChoices, searchGoodWithChildren,
    goodWithCatsChoices, searchGoodWithCats,
    goodWithDogsChoices, searchGoodWithDogs,
  },
}) => {
  const setInput = property => ({ target }) => dispatch({ type: 'SET', [property]: target.value })
  const setSelect = property => value => dispatch({ type: 'SET', [property]: value })

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
            <button
              className={cx('btn')}
              onClick={() => close()}
            >
              Search
            </button>
          </StandardForm>
        </div>
      }
    </Popup>
  )
}

export default AnimalSearch
