import React from 'react'
import Popup from 'reactjs-popup'
import StandardForm from './StandardForm'

const AnimalSearch = ({
  cx,
  searchName, setSearchName,
  genderChoices, searchGender, setSearchGender,
}) =>
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
              onChange={({ target }) => setSearchName(target.value)}
            />
          </li>
          <li>
            <label htmlFor='gender'>Gender</label>
            <StandardForm.Select
              id='gender'
              options={genderChoices}
              value={searchGender}
              onChange={setSearchGender} />
          </li>
        </ul>
      </StandardForm>
    </div>
  </Popup>

export default AnimalSearch
