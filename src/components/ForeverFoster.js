import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import styles from './ForeverFoster.module.scss'
import tiffanyPhoto from '../assets/images/tiffany2.jpg'
import bebePhoto from '../assets/images/bebe2.jpg'
import smidgePhoto from '../assets/images/smidge.jpg'
import sirHissPhoto from '../assets/images/SirHiss.jpg'
import macPhoto from '../assets/images/Mac.jpg'
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
        unless there is no further medical treatment that can done, or their
        behavior has become too aggressive for us to safely handle them. We
        continue to care for the animals we have rescued as long as they need
        us.
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
            imgSrc: macPhoto,
            name: 'Mac',
            text: `
            At just three months old, Mac was found wandering the streets of Seminole Heights and
            grew up to become a handsome loving boy.  He went to adoption events and loved to play
            with his fur brothers and sisters at his foster home.  We're not sure if it was "black
            dog" syndrome, (black dogs and cats tend to get adopted last) or something else, but at
            three years old Mac was still in our care.  He began showing small signs at adoption
            events that he was no longer enjoying them.  He was seen by various trainers who worked
            with him to try and overcome his dominant behavior, but at the age of four, Mac was
            placed into our Forever Foster program.  Relieved to no longer have the pressure of
            attending events, Mac now lives a happy life in his forever foster home where were told
            he gives the best kisses and loves to snuggle with his Foster Mom under the bed covers.
          `,
          },
          {
            imgSrc: smidgePhoto,
            name: 'Smidge',
            text: `
            Smidge and his brother were rescued from the county shelter very sick and just a few
            weeks old.  Sadly, his brother did not make it.  Smidge grew very slowly and is quite
            small.  He also developed chronic sinus infections, as well as urinary track
            infections.  He requires daily medication but lives a quiet and happy life with his
            foster mom.
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
        ].map(({ imgSrc, name, text }) => (
          <div className={cx('animal-card')}>
            <div className={cx('pet-card')}>
              <div className={cx('photo')}>
                <img src={imgSrc} alt={name} />
              </div>
              <div className={cx('description')}>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <a href="#" className={cx('btn')}>
                Sponsor
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </StandardLayout>
)

export default ForeverFoster
