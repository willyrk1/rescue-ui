import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import * as qs from 'query-string'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup'
import usePetSearch from '../hooks/usePetSearch'
import StandardForm from './StandardForm'
import styles from './AnimalSearch.module.scss'

const cx = classNames.bind(styles)

const clearValues = (obj = {}) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = undefined
    return acc
  }, {})

const extractValues = obj =>
  Object.entries(obj).reduce((acc, [key, input]) => {
    acc[key] = input ? input.value : undefined
    return acc
  }, {})

const populateValuesFromQuery = (choiceLookup, queryLookup) =>
  Object.entries(choiceLookup).reduce((acc, [key, { choices }]) => {
    acc[key] =
      choices && choices.find(({ value }) => value === queryLookup[key])
    return acc
  }, {})

const AnimalSearch = ({ petType, lists }) => {
  const petSearch = usePetSearch(petType, lists)
  const location = useLocation()
  const history = useHistory()

  const [inputs, setInputs] = useState()

  useEffect(() => {
    const queryLookup = qs.parse(location.search)

    if (petSearch) {
      setInputs({
        ...clearValues(petSearch),
        ...populateValuesFromQuery(petSearch, queryLookup),
        name: queryLookup.name,
      })
    }
  }, [petSearch, location.search])

  const storeInput = (prop, value) => setInputs({ ...inputs, [prop]: value })

  const setInput = prop => ({ target }) => storeInput(prop, target.value)
  const setSelect = prop => value => storeInput(prop, value)
  const clear = () => setInputs(clearValues(petSearch))

  const set = () => {
    history.push({
      ...location,
      search: qs.stringify({
        ...qs.parse(location.search),
        ...extractValues(inputs),
        name: inputs.name || undefined,
      }),
    })
  }

  const SelectOverride = props => (
    <StandardForm.Select
      {...props}
      isClearable
      className={cx('search-select')}
    />
  )

  return petSearch ? (
    <Popup
      modal
      closeOnDocumentClick
      trigger={<button className={cx('btn')}>Search</button>}
      contentStyle={{ width: 'inherit' }}
    >
      {close => (
        <div className={cx('search-content')}>
          <StandardForm>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={inputs.name || ''}
                  onChange={setInput('name')}
                  className={cx('search-input')}
                  autoFocus
                />
              </li>
              {[
                'specialNeeds',
                'gender',
                'breed',
                'color',
                'age',
                'furLength',
                'declawed',
                'goodWithChildren',
                'goodWithCats',
                'goodWithDogs',
              ].map(prop => (
                <li key={prop}>
                  <label htmlFor={prop}>{petSearch[prop].label}</label>
                  <SelectOverride
                    id={prop}
                    options={petSearch[prop].choices}
                    value={inputs[prop]}
                    onChange={setSelect(prop)}
                  />
                </li>
              ))}
            </ul>
            <div className={cx('actions')}>
              <button
                type="submit"
                className={cx('btn')}
                onClick={() => {
                  set()
                  close()
                }}
              >
                Search
              </button>
              <button type="button" className={cx('btn')} onClick={clear}>
                Clear
              </button>
              <button
                type="button"
                className={cx('btn')}
                onClick={() => close()}
              >
                Cancel
              </button>
            </div>
          </StandardForm>
        </div>
      )}
    </Popup>
  ) : null
}

export default AnimalSearch
