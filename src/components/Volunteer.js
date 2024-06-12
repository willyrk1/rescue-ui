import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import fosterKitten from '../assets/images/basketkittens.jpg'
import volunteerPhoto from '../assets/images/volunteers.jpg'
import styles from './Volunteer.module.scss'

const cx = classNames.bind(styles)

const Volunteer = () => (
  <StandardLayout>
    <div className={cx('volunteer')}>
      <h1>Volunteer</h1>
      <hr />
      <img src={volunteerPhoto} className={cx('right')} alt="Volunteers" />
      <p>
        Thank you for your interest in becoming a volunteer at St. Francis
        Society! We truly appreciate you for wanting to donate some of your
        valuable free time to help our animals. Volunteers are our most valuable
        asset and, without volunteers, we could not do the rescue work we do.
      </p>
      <p>
        It is VERY IMPORTANT that, as a volunteer, you realize that your piece,
        no matter how small or insignificant you feel it is, is critical to our
        rescue work. Our animals rely on you for their care. We do ask that,
        once you have agreed to an assignment, you fulfill your commitment. The
        minimum age to volunteer is 18.
      </p>

      <h2 id="positions">Volunteer Positions</h2>
      <h3>Adoption Centers/Events</h3>
      <p>
        There are several great ways to help at our adoption events (usually held in
        our Adoption Centers located in our PetSmart, Petco, and Pet Supermarket
        partners' area locations):
      </p>
      <p>
        <strong>Adoption Counselor</strong>: Adoption Counselors screen prospective
        adopters during our adoption events. Counselors speak with potential adopters
        about our available cats and work to match viable potential adopters with a
        cat that fits the personality and temperament the adopter is looking for, as
        well as their living situation. During the adoption events, counselors
        also socialize cats and kittens.  We ask that counselors commit to
        volunteering at an adoption event at least one day per month (events usually
        run approximately 3-4 hours and are held on Saturdays and Sundays).
      </p>
      <p>
        <strong>Kenneling</strong>: When our cats are in our adoption Centers (days
        vary based on location), twice a day we let them out of their cages for
        exercise, playtime, and love! During that time our volunteers clean their
        cages and provide fresh water and food. Scheduling is flexible, but we ask
        volunteers to commit to (and make) at least 1 shift per month. Shifts
        generally take 1-2 hours (though you are welcome to love on the kitties
        longer if you would like!)
      </p>

      <h3>Fostering</h3>
      <img src={fosterKitten} className={cx('right')} alt="Fostering" />
      <p>
        Foster care homes provide a critical link between our acceptance of
        animals into St. Francis and getting them placed in adoptive homes.
        Since we do not have a facility to house all of our animals, we are
        limited on the number of animals we can take in, by the number of foster
        homes we have available. Animals needing fostering include those too
        young to be placed up for adoption and those with an illness or injury
        needing time to recover.
      </p>
      <p>
        Fostering is for a minimum of 5 days. Foster families are expected to
        provide the animal with food, water, a space in your home to keep foster
        animals separate from your pets and, of course, love and companionship.
        St. Francis is responsible for any veterinary care needed while the
        animal is in foster care. Foster families are expected to follow our
        foster guidelines while cats and kittens are in their care.
      </p>
      <p>
        Fosters are required to maintain animals' medical history in our
        database while in their care. Also, any pertinent information regarding
        the temperament and personality of the animals should be recorded, as
        this will assist in placing them in permanent homes.
      </p>
      <h3>Transporting</h3>
      <p>
        Transport volunteers take our foster kitties to and from vet appointments and
        occassionally deliver kittens transferring from one foster home to another.
      </p>
      <p>
        <Link to="/volunteer-form">Submit a volunteer application</Link>
      </p>
    </div>
  </StandardLayout>
)

export default Volunteer
