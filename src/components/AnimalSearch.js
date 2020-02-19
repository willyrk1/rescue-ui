import React from 'react'
import Popup from 'reactjs-popup'
import StandardForm from './StandardForm'

const AnimalSearch = ({
  cx, dispatch,
  state: {
    searchName,
    genderChoices, searchGender,
    breedChoices, searchBreed,
    colorChoices, searchColor,
    ageChoices, searchAge,
  },
}) => {
  const setInput = property => ({ target }) => dispatch({ type: 'SET', [property]: target.value })
  const setSelect = property => value => dispatch({ type: 'SET', [property]: value })

  return (
    <Popup
      modal
      closeOnDocumentClick
      trigger={<button className={cx('btn', 'search')}>Search</button>}
    >
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
              />
            </li>
            <li>
              <label htmlFor='gender'>Gender</label>
              <StandardForm.Select
                id='gender'
                options={genderChoices}
                value={searchGender}
                onChange={setSelect('searchGender')} />
            </li>
            <li>
              <label htmlFor='breed'>Breed</label>
              <StandardForm.Select
                id='breed'
                options={breedChoices}
                value={searchBreed}
                onChange={setSelect('searchBreed')} />
            </li>
            <li>
              <label htmlFor='color'>Color</label>
              <StandardForm.Select
                id='color'
                options={colorChoices}
                value={searchColor}
                onChange={setSelect('searchColor')} />
            </li>
            <li>
              <label htmlFor='age'>Age</label>
              <StandardForm.Select
                id='age'
                options={ageChoices}
                value={searchAge}
                onChange={setSelect('searchAge')} />
            </li>
          </ul>
        </StandardForm>
      </div>
    </Popup>
  )
}

export default AnimalSearch
