import React from 'react'
import classNames from 'classnames/bind'
import { useLocations } from '../context/GlobalDataContext'
import StandardLayout from './StandardLayout'
import styles from './AdoptionLocations.module.scss'
import adoptionPhoto1 from '../assets/images/adoptionphoto1.jpg'
import adoptionPhoto2 from '../assets/images/adoptionphoto2.jpg'
import adoptionPhoto4 from '../assets/images/adoptionphoto4.jpg'
import dogAdoption1 from '../assets/images/dogadoption1.jpg'

const cx = classNames.bind(styles)

const AdoptionLocations = () => {
  const locations = useLocations() || []

  const counties = [...new Set(locations.map(({ county }) => county))]

  return (
    <StandardLayout>
      <div className={cx('adoption-locations')}>
        <h1>Come Visit Us</h1>
        <hr />
        <img src={adoptionPhoto2} className={cx('right')} alt="Adoptions" />
        <p>
          <strong>
            Looking to Adopt a Cat? Come visit us at one of these locations!
          </strong>
        </p>
        <p>
          Adoption centers are staffed by volunteers so please verify adoption
          hours with store management. All of our animals are spay/neutered,
          vaccinated, tested, microchipped, de-wormed and de-fleaed before
          adoption. St. Francis Society is an all volunteer organization. We
          have strict guidelines for adoption approval and our volunteers have
          the right to refuse adoption applicants based on their own judgment.
        </p>

        {counties.map((countyName, countyIndex) => (
          <>
            <h2>{countyName}</h2>
            <ul>
              {locations
                .filter(({ county }) => county === countyName)
                .map(
                  (
                    { name, street_address_1, city, state, area, description },
                    locationIndex
                  ) => (
                    <li>
                      {countyIndex === 0 && locationIndex === 0 && (
                        <img
                          src={adoptionPhoto1}
                          className={cx('right')}
                          alt="Adoptions"
                        />
                      )}
                      <strong>{name}</strong>, located at{' '}
                      <a
                        target="_blank"
                        href={`http://maps.google.com/maps?q=${street_address_1},+${city},+${state}`}
                      >
                        {street_address_1}
                      </a>{' '}
                      in {area}. {description}
                    </li>
                  )
                )}
            </ul>
          </>
        ))}

        <div className={cx('dogs')}>
          <div>
            <h2>Looking to Adopt a Dog?</h2>
            <p>
              St. Francis Society dogs/puppies live in foster homes and can be
              seen BY APPOINTMENT ONLY on Saturday-Sunday at our{' '}
              <a href="https://goo.gl/maps/tB7kiFNWT9p">Citrus Park Petsmart</a>{' '}
              location, between the hours of 12:00 p.m. and 5:00 p.m. based on
              volunteer availability.
            </p>
          </div>
          <img src={dogAdoption1} alt="Dog Adoptions" />
        </div>
      </div>
    </StandardLayout>
  )
}

export default AdoptionLocations
