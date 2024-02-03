import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import ForeverFosterButton from './ForeverFosterButton'
import styles from './ForeverFoster.module.scss'
import tiffanyPhoto from '../assets/images/tiffany2.jpg'
import bebePhoto from '../assets/images/bebe2.jpg'
import sirHissPhoto from '../assets/images/SirHiss.jpg'
import frankiePhoto from '../assets/images/Frankie2.jpg'

const cx = classNames.bind(styles)

const ForeverFoster = () => (
  <StandardLayout legal>
    <div className={cx('forever-foster')}>
      <h1>Sponsor A Forever Foster</h1>
      <hr />
      <p>
        A Forever Foster is a cat or dog that is unadoptable due to a medical or
        behavioral issue. St. Francis Society will never euthanize an animal
        unless there is no further medical treatment that can done. We continue
        to care for the animals we have rescued as long as they need us.
      </p>
      <p>
        When you sponsor a Forever Foster, you not only help us vet and cure
        sick pets and get them adopted into loving homes, you also help us care
        for all the Forever Fosters that we continue to care for and love.
      </p>
      <p>Thank you for your continued support!</p>

      <div className={cx('photo-text-gallery')}>
        {[
          {
            imgSrc: tiffanyPhoto,
            name: 'Tiffany',
            text: `
            Tiffany was TNR'd (trap-neuter-returned) at a local apartment complex.  For nearly
            four years she safely lived there and was fed by a St. Francis volunteer.  Sadly, when
            new renters moved in, they threatened Tiffany's safety.  Tiffany was rescued by St.
            Francis Society and brought to a safe location where she and a few other feral cats
            safely enjoy life as they like.
          `,
          },
          {
            imgSrc: bebePhoto,
            name: 'Bebe',
            text: `
            Bebe was found one Christmas Eve as a very sick kitten.  She was rushed to a St.
            Francis foster mom who nursed her back to health.  However, after suffering with
            chronic sinus infections, it was discovered Bebe has sinus polyps.  Despite having
            them removed, they slowly grow back and need surgical removal.  Despite her runny
            nose, Bebe is quite the cuddler and lives a happy life with her foster family.
          `,
          },
          {
            imgSrc: sirHissPhoto,
            name: 'Sir Hiss',
            text: `
            Sadly, Sir Hiss was one of 100 cats and kittens taken from a Tampa hoarding situation.
            In addition to being very scared, he is also partially blind and deaf.  He now lives
            safely and comfortably in his forever foster home where he is allowed to hide as much
            or as little as he likes.
          `,
          },
          {
            imgSrc: frankiePhoto,
            name: 'Frankie',
            text: `
            Frankie was found living as a kitten in a feral cat community.  While at first she
            seemed to be healthy, as she grew she began to have a number of medical issues
            surface.  Poor Frankie suffers from Stomatitis, a severe, painful inflammation of a
            cat’s mouth and gums that causes ulcers to form in the mouth and severe gingivitis.
            In an effort to help her with this condition she has had all of her teeth extracted.
            In addition, she also suffers from lesions on both of her eyes and frequent diarrhea.
            Despite her ailments, Frankie is a happy girl who loves following her mom around the
            house and getting as much lap time as possible.
          `,
          },
        ].map(({ imgSrc, name, text }, index) => (
          <div className={cx('animal-card')} key={index}>
            <div className={cx('pet-card')}>
              <div className={cx('photo')}>
                <img src={imgSrc} alt={name} />
              </div>
              <div className={cx('description')}>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <ForeverFosterButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  </StandardLayout>
)

export default ForeverFoster
