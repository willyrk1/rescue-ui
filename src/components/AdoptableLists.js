import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import StandardLayout from './StandardLayout'
import AnimalCard from './AnimalCard'
// import styles from './AdoptableList.module.scss'

// const cx = classNames.bind(styles)

const AdoptableList = ({ getPets, lists, children }) => {
  const [pets, setPets] = useState()

  useEffect(() => {
    const loadPets = async () => {
      const petData = getPets(StFrancisRescue)
      setPets((await petData).data)
    }
    loadPets()
  }, [])

  return (
    <StandardLayout>
      {typeof children === 'function' ? children(pets) : children}

      {pets && lists.map(({ property, title }) =>
        pets[property] && pets[property].length &&
          <React.Fragment key={property}>
            <h2>{title}</h2>
            {pets[property].map(animal =>
              <AnimalCard animal={animal} key={animal.id} />
            )}
          </React.Fragment>
      )}

    </StandardLayout>
  )
}

  export default AdoptableList
