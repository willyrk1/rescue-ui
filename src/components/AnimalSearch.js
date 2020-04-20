import React from 'react'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import StandardForm from './StandardForm'
import styles from './AnimalSearch.module.scss'

const cx = classNames.bind(styles)

const AnimalSearch = ({
  dispatch,
  state: {
    search,
    search: { name: { input: searchName }}
  }
}) => {
  const storeInput = (prop, value) => dispatch({ type: 'STORE_INPUT', prop, value })

  const setInput = prop => ({ target }) => storeInput(prop, target.value)
  const setSelect = prop => value => storeInput(prop, value)

  const SelectOverride = props =>
    <StandardForm.Select {...props} isClearable className={cx('search-select')} />

  return (
    <Popup
      modal
      closeOnDocumentClick
      trigger={<button className={cx('btn')}>Search</button>}
      contentStyle={{ width: 'inherit' }}
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
                  onChange={setInput('name')}
                  className={cx('search-input')}
                />
              </li>
              {[
                'gender', 'breed', 'color', 'age', 'furLength', 'declawed',
                'goodWithChildren', 'goodWithCats', 'goodWithDogs'
              ].map(prop =>
                <li key={prop}>
                  <label htmlFor={prop}>{search[prop].label}</label>
                  <SelectOverride
                    id={prop}
                    options={search[prop].choices}
                    value={search[prop].input}
                    onChange={setSelect(prop)}
                  />
                </li>
              )}
            </ul>
            <div className={cx('actions')}>
              <button
                type='button'
                className={cx('btn')}
                onClick={() => {
                  dispatch({ type: 'SET' })
                  close()
                }}
              >
                Search
              </button>
              <button
                type='button'
                className={cx('btn')}
                onClick={() => dispatch({ type: 'CLEAR_INPUT' })}
              >
                Clear
              </button>
              <button
                type='button'
                className={cx('btn')}
                onClick={() => close()}
              >
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
