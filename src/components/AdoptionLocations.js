import React from 'react';
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import styles from './AdoptionLocations.module.scss';
import adoptionPhoto1 from '../assets/images/adoptionphoto1.jpg'
import adoptionPhoto2 from '../assets/images/adoptionphoto2.jpg'
import adoptionPhoto4 from '../assets/images/adoptionphoto4.jpg'
import dogAdoption1 from '../assets/images/dogadoption1.jpg'

const cx = classNames.bind(styles)

const AdoptionLocations = () =>
  <StandardLayout>
    <div className={cx('adoption-locations')}>
      <h1>Come Visit Us</h1>
      <hr/>
      <img src={adoptionPhoto2} className={cx('right')} alt='Adoptions' />
      <p>
        <strong>Looking to Adopt a Cat?  Come visit us at one of these locations!</strong>
      </p>
      <p>
        Adoption centers are staffed by volunteers so please verify adoption hours with store
        management.  All of our animals are spay/neutered, vaccinated, tested, microchipped,
        de-wormed and de-fleaed before adoption.  St. Francis Society is an
        all volunteer organization. We have strict guidelines for adoption approval and our
        volunteers have the right to refuse adoption applicants based on their own judgment.
      </p>

      <h2>Hillsborough</h2>
      <ul>
        <li>
          <img src={adoptionPhoto1} className={cx('right')} alt='Adoptions' />
          <strong>PetSmart</strong>, located
          at <a href='https://goo.gl/maps/tB7kiFNWT9p'>12835 Citrus Park Dr</a> across from the
          Citrus Park Mall. Our volunteers are onsite for adoptions Saturday from 11:00 a.m. to
          5:00 p.m. and Sunday from 12:00 p.m. to 5:00 p.m. They will be happy to assist you with
          finding the perfect feline companion. Cats are onsite 7 days a week.
        </li>
        <li>
          <strong>PetSmart</strong>, located
          at <a href='https://goo.gl/maps/zt3X9HkgfQ12'>11331 Causeway Blvd</a> in Brandon. Cats
          and adoption counselors are onsite for adoptions Saturday and Sunday from Noon to 4:00
          p.m. only.
        </li>
        <li>
          <strong>PetSmart</strong>, located
          at <a href='https://goo.gl/maps/fUXQcqxTNAt'>1540 N Dale Mabry Highway</a> in
          South Tampa. Cats
          and adoption counselors are onsite for adoptions Saturday from 11:00 a.m. to 4:00 p.m. only.
        </li>
        <li>
          <strong>PetSmart</strong>, located
          at <a href='https://goo.gl/maps/M3gAzvdMGjS2'>13127 North Dale Mabry Highway</a> in
          Carrollwood.  Cats and adoption counselors are onsite for adoptions Saturday from 11:00
          a.m. to 4:00 p.m. and Sunday from Noon to 3:00 p.m. only.
        </li>
        <li>
          <strong>PetSmart</strong>, located
          at <a href='https://goo.gl/maps/i6jTMpXmVi62'>136 S West Shore Boulevard</a> in Tampa.
          Cats and adoption counselors are onsite for adoptions Saturday from 1:00 p.m. to 4:00 p.m. only.
        </li>
        <li>
          <strong>Pet Supermarket Brandon</strong>, located
          at <a href='https://goo.gl/maps/dB73tf76QKS2'>845 E Bloomingdale Ave</a> in Brandon.
          Pet Supermarket management can assist with an adoption during business hours. Cats are
          onsite 7 days a week.
        </li>
      </ul>

      <img src={adoptionPhoto4} className={cx('right')} alt='Adoptions' />
      <h2>Pasco</h2>
      <ul>
        <li>
          <strong>Pet City</strong>, located
          at <a href='https://goo.gl/maps/DLxeZQioh2m'>2119 Collier Parkway</a> in Land O Lakes.
          Pet City management can assist with an adoption during business hours. Cats are onsite
          7 days a week.
        </li>
      </ul>

      <h2>Pinellas</h2>
      <ul>
        <li>
          <strong>PetSmart</strong>, located
          at <a href='http://bit.ly/2Q0knOJ'>3993 Tyrone Blvd N</a> in Lighthouse
          Crossings. Our volunteers are onsite for adoptions Saturday from 11:00 a.m. to
          5:00 p.m. and Sunday from 12:00 p.m. to 5:00 p.m. They will be happy to assist you with
          finding the perfect feline companion. Cats are onsite 7 days a week.
        </li>
        <li>
          <strong>Petsmart</strong>, located
          at <a href='https://goo.gl/maps/oysPe6e4Xry'>3130 Tampa Road</a> in Oldsmar.  Cats and
          adoption counselors are onsite for adoptions Saturday from 11:00 a.m. to 4:00 p.m. only.
        </li>
      </ul>

      <div className={cx('dogs')}>
        <div>
          <h2>Looking to Adopt a Dog?</h2>
          <p>
            St. Francis Society dogs/puppies live in foster homes and can be seen BY APPOINTMENT ONLY
            on Saturday-Sunday at
            our <a href='https://goo.gl/maps/tB7kiFNWT9p'>Citrus Park Petsmart</a> location,
            between the hours of 12:00 p.m. and 5:00 p.m. based on volunteer availability.
          </p>
        </div>
        <img src={dogAdoption1} alt='Dog Adoptions' />
      </div>
    </div>
  </StandardLayout>

export default AdoptionLocations;
