import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import StandardLayout from './StandardLayout'
import AnimalCard from './AnimalCard'
import styles from './AdoptableLists.module.scss'

const cx = classNames.bind(styles)

const AdoptableList = ({ getPets, lists, children }) => {
  const [pets, setPets] = useState()

  useEffect(() => {
    const loadPets = async () => {
      const petData = getPets(StFrancisRescue)
      setPets((await petData).data)
    }
    loadPets()
  }, [getPets])

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {pets && lists.map(({ property, title }) =>
        pets[property] && pets[property].length &&
          <div className={cx('adoptable-list')} key={property}>
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
