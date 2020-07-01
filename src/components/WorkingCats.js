import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import styles from './WorkingCats.module.scss'
import workingCatPhoto from '../assets/images/barncatHIGHREScrop.jpg'

const cx = classNames.bind(styles)

const WorkingCats = () => (
  <StandardLayout>
    <div className={cx('working-cats')}>
      <h1>Working Cat Program</h1>
      <hr />

      <img src={workingCatPhoto} alt="Working Cat Program" />

      <h2>All cats deserve a chance at a good life...</h2>
      <p>
        When St. Francis rescues poorly socialized and feral cats, we sometimes
        have to consider non-traditional adoption placement. The St. Francis
        Working Cat Program is designed to help a specific population of cats –
        those who may not be comfortable living in a traditional home setting,
        but would be incredibly helpful and happy as working cats to local
        homeowners, landowners, and businesses who have a need for pest control.
      </p>
      <p>
        We believe that these cats don’t deserve to die simply because they
        can’t go into a typical home environment. We recognize that they deserve
        shelter, access to food and water, and the stimulation of critter
        hunting that a “working” placement provides. St. Francis Working Cats
        come from shelters, trapping, and other situations where returning them
        to their original location would not be ideal. These cats cannot be
        adopted as traditional pets, are not eligible for Trap-Neuter-Return,
        and, for one reason or another, cannot be returned to their original
        outdoor habitat, which is always preferable. Instead, these cats are
        sterilized, vaccinated, microchipped, and adopted to families who
        appreciate working cats for critter patrol and can provide a safe,
        appropriate environment such as a barn, stable, garage, or warehouse.
      </p>
      <p>
        This way, these cats enjoy safe outdoor homes with shelter and a
        caregiver and adopters enjoy having healthy, sterilized cats happily
        tend to their mouse, snake, or vermin troubles. Our Working Cat Program
        is a win-win for both the cats and the adopters! Interested in adopting
        a working cat and housing some of St. Francis’ most lovable free
        spirits?
      </p>

      <h2>Working Cat Program Questions</h2>

      <h3>How much is the adoption fee?</h3>
      <p>
        The adoption fee is waived. The adopter is responsible for providing
        food, shelter, and future veterinary care as needed.
      </p>

      <h3>What do I do when I bring my cats home?</h3>
      <p>
        When you bring your cats home, they must be confined to a room or extra
        large dog crate in their new shelter for at least 2 weeks, preferably up
        to 4 weeks. You will feed/water and scoop the litter pan daily during
        this confinement period. After this period, they can be released and
        will usually accept their new home. You will continue to provide access
        to food, water and the shelter to which they have become accustomed. A
        program director at St. Francis will be available to you by phone and
        email during this time to answer any questions and provide support while
        your new working cats transition and acclimate!
      </p>

      <h3>Are my new cats spayed and neutered?</h3>
      <p>
        Yes! All working cats will arrive spayed or neutered, with age
        appropriate vaccinations and microchips. You will be responsible for
        maintaining future vaccinations and any other vet care as required. This
        will most likely involve yearly trapping with a humane live trap.
        Low-cost vaccinations are available through Humane Society and others
        for feral and semi-feral working cats.
      </p>

      <h3>Can I pick my cats? Do you offer working kittens?</h3>
      <p>
        Working cats are generally going to be over 6 months old, as younger
        kittens are not properly equipped to adjust to such a situation. The
        most important factor in matching a working cat to a new home is how the
        history of the cat matches with the new environment. For example, a cat
        who has lived its entire life indoors would not be well suited to an
        open barn, but may be a great match for a contained warehouse. We always
        provide at least a pair of cats (never singles) as they’ve been shown to
        fair much better as pairs or small groups. We will do our best to honor
        any age/sex/color requests but please allow us to select the animals we
        feel will be the best match for their new home!
      </p>

      <p>
        <strong>
          If you would like more information about this important program, fill
          out the&nbsp;
          <Link to="/working-cats-form">Working Cat Application Form</Link>
        </strong>
      </p>
    </div>
  </StandardLayout>
)

export default WorkingCats
