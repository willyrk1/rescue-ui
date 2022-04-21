import React, { useState, useRef } from 'react'
import classNames from 'classnames/bind'
import Popup from 'reactjs-popup2'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './VolunteerForm.module.scss'

const cx = classNames.bind(styles)

const VolunteerForm = () => {
  const [fosterInterest, setFosterInterest] = useState()
  const [fosterCats, setFosterCats] = useState(false)
  const [fosterDogs, setFosterDogs] = useState(false)
  const [ownOthers, setOwnOthers] = useState(false)
  const [ratherCats, setRatherCats] = useState(false)
  const [ratherDogs, setRatherDogs] = useState(false)

  const ratherRef = useRef()
  const fosterChoiceRef = useRef()

  const validate = () => {
    ratherRef.current.setCustomValidity(
      ratherCats || ratherDogs
        ? ''
        : 'Please select at least one of these options.'
    )
    fosterChoiceRef.current &&
      fosterChoiceRef.current.setCustomValidity(
        fosterCats || fosterDogs
          ? ''
          : 'Please select at least one of these options.'
      )
  }

  return (
    <StandardLayout>
      <div className={cx('volunteer-form')}>
        <div className={cx('contact-text')}>
          <h1>Volunteer Application Form</h1>
          <hr />
          <p>
            St. Francis Animal Rescue has taken in and adopted out over 14,000
            animals since we were founded in August of 1997. We couldn't do it
            without the help of our volunteers. Thank you for your interest in
            becoming a St. Francis Society volunteer! Please indicate below how
            you would like to help out.
          </p>
        </div>

        <StandardForm
          action={`${PROTOCOL}://${HOSTNAME}/volunteers`}
          className={cx('form')}
          submitProps={{
            className: cx('btn'),
            children: 'Submit Volunteer Application',
            onClick: validate,
          }}
        >
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="volunteer[person_attributes][first_name]"
            required
            maxLength="30"
            autoFocus
          />
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="volunteer[person_attributes][last_name]"
            required
            maxLength="30"
          />
          <label htmlFor="email">Your E-mail Address *</label>
          <input
            type="email"
            id="email"
            name="volunteer[person_attributes][email]"
            required
          />
          <label htmlFor="address">Street Address *</label>
          <input
            type="text"
            id="address"
            name="volunteer[person_attributes][address1]"
            required
            maxLength="80"
          />
          <label htmlFor="address2"></label>
          <input
            type="text"
            id="address2"
            name="volunteer[person_attributes][address2]"
            maxLength="80"
          />
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="volunteer[person_attributes][city]"
            required
            maxLength="20"
          />
          <label htmlFor="state">State *</label>
          <StandardForm.Select
            id="state"
            options={states}
            name="volunteer[person_attributes][state]"
            required
          />
          <label htmlFor="zip">ZIP *</label>
          <input
            type="text"
            id="zip"
            name="volunteer[person_attributes][postal_code]"
            required
            maxLength="10"
          />
          <label htmlFor="phone">Phone *</label>
          <StandardForm.Phone
            id="phone"
            name="volunteer[person_attributes][phone]"
            required
          />
          <label htmlFor="email-contact">
            Is email a good way to contact you for schedule changes,
            announcements, special events, etc.? *
          </label>
          <StandardForm.Input>
            <label htmlFor="email-contact-yes">
              <input
                type="radio"
                id="email-contact-yes"
                name="volunteer[use_email]"
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="email-contact-no">
              <input
                type="radio"
                id="email-contact-no"
                name="volunteer[use_email]"
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          <label htmlFor="under-18">Are you at least 18 years old? *</label>
          <StandardForm.Input>
            <label htmlFor="under-18-yes">
              <input
                type="radio"
                id="under-18-yes"
                name="volunteer[under_18]"
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="under-18-no">
              <input
                type="radio"
                id="under-18-no"
                name="volunteer[under_18]"
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          <label htmlFor="background-check">Do you consent to a criminal background check? *</label>
          <StandardForm.Input>
            <label htmlFor="background-check-yes">
              <input
                type="radio"
                id="background-check-yes"
                name="volunteer[background_check]"
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="background-check-no">
              <Popup
                modal
                closeOnDocumentClick
                trigger={
                  <input
                    type="radio"
                    id="background-check-no"
                    name="volunteer[background_check]"
                    value="false"
                  />
                }
              >
                {close => (
                  <div className={cx('popup-modal')}>
                    <div className={cx('popup-inner')}>
                      <button className={cx('close')} onClick={close}>
                        &times;
                      </button>
                      <h2>Foster Application</h2>
                      <div className={cx('content')}>
                        <p>
                          Thank you for your interest in becoming a foster parent. However,
                          St. Francis Society only utilizes volunteers who have never been convicted
                          of a felony or animal abuse.
                        </p>
                      </div>
                      <div className={cx('actions')}>
                        <button className={cx('btn')} onClick={close}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
              No
            </label>
          </StandardForm.Input>
          <label htmlFor="rather">Do You Want Work With *</label>
          <StandardForm.Input>
            <label htmlFor="rather-cats">
              <input
                type="checkbox"
                id="rather-cats"
                name="volunteer[work_with_cats]"
                value="1"
                checked={ratherCats}
                onChange={() => setRatherCats(!ratherCats)}
                ref={ratherRef}
              />
              Cats/
              <wbr />
              kittens
            </label>
            <label htmlFor="rather-dogs">
              <input
                type="checkbox"
                id="rather-dogs"
                name="volunteer[work_with_dogs]"
                value="1"
                checked={ratherDogs}
                onChange={() => setRatherDogs(!ratherDogs)}
              />
              Dogs
            </label>
          </StandardForm.Input>

          <StandardForm.FullWidth>
            <p>
              There are several ways you can benefit St Francis as a volunteer.
              We desperately need foster homes for our animals and help at our
              adoption centers working to get them adopted. We also need dog
              handlers that can show our dogs at adoption events and welcome
              anyone with experience in marketing and fund raising/grant
              writing.
            </p>

            <h2>Fostering</h2>
            <p>
              All our animals go into a foster home before they are adopted.
              This allows us to get a feel for their personality and temperament
              so we can match them properly with potential adopters. St Francis
              provides all veterinary care that is needed to get the animal
              ready for adoption (spay/neuter, vaccinations, worming, etc). It
              is the responsibility of the foster to bring their foster
              animal(s) to our vet for services and ultimately to our adoption
              center when they are ready for adoption. We advertise all animals
              ready for adoption on our website so we may we get an online
              adoption request for an animal in foster care. In that case the
              foster can either arrange to have the potential adopter visit the
              animal in their home or arrange to meet them with the animal at an
              adoption center.
            </p>
          </StandardForm.FullWidth>

          <label htmlFor="foster-interest">
            I'm interested in being a Foster *
          </label>
          <StandardForm.Input>
            <label htmlFor="foster-interest-yes">
              <input
                type="radio"
                id="foster-interest-yes"
                name="foster-interest"
                checked={fosterInterest || false}
                onChange={() => setFosterInterest(true)}
                required
              />
              Yes
            </label>
            <label htmlFor="foster-interest-no">
              <input
                type="radio"
                id="foster-interest-no"
                name="foster-interest"
                checked={fosterInterest === false}
                onChange={() => setFosterInterest(false)}
              />
              No
            </label>
          </StandardForm.Input>
          {fosterInterest && (
            <>
              <label htmlFor="commit">
                Are you willing to commit a minimum of four months to fostering?
              </label>
              <StandardForm.Input>
                <label htmlFor="commit-yes">
                  <input
                    type="radio"
                    id="commit-yes"
                    name="volunteer[commit_to_4_months]"
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="commit-no">
                  <Popup
                    modal
                    closeOnDocumentClick
                    trigger={
                      <input
                        type="radio"
                        id="commit-no"
                        name="volunteer[commit_to_4_months]"
                        value="false"
                      />
                    }
                  >
                    {close => (
                      <div className={cx('popup-modal')}>
                        <div className={cx('popup-inner')}>
                          <button className={cx('close')} onClick={close}>
                            &times;
                          </button>
                          <h2>Foster Application</h2>
                          <div className={cx('content')}>
                            <p>
                              Thank you for your interest in becoming a foster parent. However,
                              due to the time needed for training and kitten care, we require a
                              minimum four-month commitment.
                            </p>
                          </div>
                          <div className={cx('actions')}>
                            <button className={cx('btn')} onClick={close}>
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                  No
                </label>
              </StandardForm.Input>
              <label htmlFor="provide-food">
                Are you able to provide food and litter for the animals you
                foster? *
              </label>
              <StandardForm.Input>
                <label htmlFor="provide-food-yes">
                  <input
                    type="radio"
                    id="provide-food-yes"
                    name="volunteer[will_provide_supplies_for_fostered]"
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="provide-food-no">
                  <input
                    type="radio"
                    id="provide-food-no"
                    name="volunteer[will_provide_supplies_for_fostered]"
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
              <label htmlFor="provide-vet">
                Are you willing to bring your foster animal(s) to our
                veterinarian for exams, vaccinations, spay/neuter?
              </label>
              <StandardForm.Input>
                <label htmlFor="provide-vet-yes">
                  <input
                    type="radio"
                    id="provide-vet-yes"
                    name="volunteer[will_bring_fostered_to_vet]"
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="provide-vet-no">
                  <input
                    type="radio"
                    id="provide-vet-no"
                    name="volunteer[will_bring_fostered_to_vet]"
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
              <label htmlFor="foster-choice">Do you want to foster: *</label>
              <StandardForm.Input>
                <label htmlFor="foster-choice-cats">
                  <input
                    type="checkbox"
                    id="foster-choice-cats"
                    checked={fosterCats}
                    onChange={() => setFosterCats(!fosterCats)}
                    name="volunteer[foster_cats]"
                    value="1"
                    ref={fosterChoiceRef}
                  />
                  Cats/
                  <wbr />
                  kittens
                </label>
                <label htmlFor="foster-choice-dogs">
                  <input
                    type="checkbox"
                    id="foster-choice-dogs"
                    checked={fosterDogs}
                    onChange={() => setFosterDogs(!fosterDogs)}
                    name="volunteer[foster_dogs]"
                    value="1"
                  />
                  Dogs
                </label>
              </StandardForm.Input>
            </>
          )}

          {fosterInterest && (
            <>
              {fosterCats && (
                <>
                  <StandardForm.FullWidth>
                    <p className={cx('fosterNote')}>
                      <strong>CATS:</strong> Our cats stay in foster care until
                      a cage is available at an adoption center. Once they go
                      into a cage at the adoption center, they remain there for
                      a week or so and then they go back to the foster home for
                      a short cage break before coming back to the adoption
                      center.
                    </p>
                  </StandardForm.FullWidth>

                  <label htmlFor="cat-show">
                    Are you willing to take your foster cat to our adoption
                    center when a cage is available?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor="cat-show-yes">
                      <input
                        type="radio"
                        id="cat-show-yes"
                        name="volunteer[will_take_foster_cat_to_adoption_center]"
                        value="true"
                      />
                      Yes
                    </label>
                    <label htmlFor="cat-show-no">
                      <input
                        type="radio"
                        id="cat-show-no"
                        name="volunteer[will_take_foster_cat_to_adoption_center]"
                        value="false"
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </>
              )}

              {fosterDogs && (
                <>
                  <StandardForm.FullWidth>
                    <p className={cx('fosterNote')}>
                      <strong>DOGS:</strong> Fosters should be willing to bring
                      their foster dog to the adoption center for viewing when
                      requested. Occasionally we have special adoption events
                      and request the foster bring their dog for viewing if
                      possible.
                    </p>
                  </StandardForm.FullWidth>
                  <label htmlFor="dog-show">
                    Are you willing to take your foster dog to adoption events?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor="dog-show-yes">
                      <input
                        type="radio"
                        id="dog-show-yes"
                        name="volunteer[will_take_foster_dog_to_adoption_events]"
                        value="true"
                      />
                      Yes
                    </label>
                    <label htmlFor="dog-show-no">
                      <input
                        type="radio"
                        id="dog-show-no"
                        name="volunteer[will_take_foster_dog_to_adoption_events]"
                        value="false"
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </>
              )}
              <label htmlFor="own-rent">Do you:</label>
              <StandardForm.Input>
                <label htmlFor="own-rent-own">
                  <input
                    type="radio"
                    id="own-rent-own"
                    name="volunteer[own_home]"
                    value="true"
                  />
                  Own
                </label>
                <label htmlFor="own-rent-rent">
                  <input
                    type="radio"
                    id="own-rent-rent"
                    name="volunteer[own_home]"
                    value="false"
                  />
                  Rent
                </label>
              </StandardForm.Input>
              <label htmlFor="own-other">Do you own other animals?</label>
              <StandardForm.Input>
                <label htmlFor="own-other-yes">
                  <input
                    type="radio"
                    id="own-other-yes"
                    name="volunteer[own_other_animals]"
                    checked={ownOthers}
                    onChange={() => setOwnOthers(true)}
                    value="true"
                  />
                  Yes
                </label>
                <label htmlFor="own-other-no">
                  <input
                    type="radio"
                    id="own-other-no"
                    name="volunteer[own_other_animals]"
                    checked={!ownOthers}
                    onChange={() => setOwnOthers(false)}
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
              {ownOthers && (
                <>
                  <label htmlFor="spayed">
                    Are your animals spayed/neutered?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor="spayed-yes">
                      <input
                        type="radio"
                        id="spayed-yes"
                        name="volunteer[owned_animals_spayed_neutered]"
                        value="true"
                      />
                      Yes
                    </label>
                    <label htmlFor="spayed-no">
                      <input
                        type="radio"
                        id="spayed-no"
                        name="volunteer[owned_animals_spayed_neutered]"
                        value="false"
                      />
                      No
                    </label>
                  </StandardForm.Input>
                  <label htmlFor="vaccinated">
                    Are your animals current on their vaccinations?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor="vaccinated-yes">
                      <input
                        type="radio"
                        id="vaccinated-yes"
                        name="volunteer[owned_animals_vaccines_current]"
                        value="true"
                      />
                      Yes
                    </label>
                    <label htmlFor="vaccinated-no">
                      <input
                        type="radio"
                        id="vaccinated-no"
                        name="volunteer[owned_animals_vaccines_current]"
                        value="false"
                      />
                      No
                    </label>
                  </StandardForm.Input>
                  <label htmlFor="flea-prevent">
                    Are your animals on any flea prevention?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor="flea-prevent-yes">
                      <input
                        type="radio"
                        id="flea-prevent-yes"
                        name="volunteer[use_flea_prevention]"
                        value="true"
                      />
                      Yes
                    </label>
                    <label htmlFor="flea-prevent-no">
                      <input
                        type="radio"
                        id="flea-prevent-no"
                        name="volunteer[use_flea_prevention]"
                        value="false"
                      />
                      No
                    </label>
                  </StandardForm.Input>
                  <label htmlFor="vet-clinic">Current veterinary clinic:</label>
                  <input
                    type="text"
                    id="vet-clinic"
                    name="volunteer[veterinarian_name]"
                    maxLength="50"
                  />
                </>
              )}
            </>
          )}

          <StandardForm.FullWidth>
            <h2>Transporting</h2>
            <p>
              Transport volunteers take our foster kitties to and from vet appointments and
              occassionally deliver kittens transferring from one foster home to another.
            </p>
          </StandardForm.FullWidth>

          <label htmlFor="transporter">I would like to be a Transporter</label>
          <StandardForm.Input>
            <input
              type="checkbox"
              id="transporter"
              name="volunteer[be_transporter]"
              value="1"
            />
          </StandardForm.Input>

          <StandardForm.FullWidth>
            <h2>Adoption Centers</h2>
            <p>
              There are three ways to help out at our adoption centers,
              Kennelling, Adoption Counsellor and Dog Handler.
            </p>
            <p>
              <strong>Kennelling:</strong> Twice a day we let our cats out of
              their cage for excercise, playtime and love. During that time
              their cage is cleaned and fresh water and food (if needed) is
              provided. Petsmart kennels for us in the morning, we kennel in the
              evening. For example, some volunteers pick a certain day of the
              week or maybe every other particular weekday. Some volunteers fill
              in where there are gaps in the schedule for the month. We try to
              make it flexible for the volunteers.
            </p>
          </StandardForm.FullWidth>

          <label htmlFor="kenneller">I would like to be a Kenneller</label>
          <StandardForm.Input>
            <input
              type="checkbox"
              id="kenneller"
              name="volunteer[be_kenneller]"
              value="1"
            />
          </StandardForm.Input>

          <StandardForm.FullWidth>
            <p>
              <strong>Adoption Counselor:</strong> Adoption Counselors screen
              prospective adopters at the adoption centers. They work to try and
              match a potential adopter with a cat that fits the personality and
              temperament they are looking for. If you choose to be an adoption
              counselor, we ask that you commit to work the adoption center at
              least one day a month.
            </p>
          </StandardForm.FullWidth>

          <label htmlFor="counselor">
            I would like to be an Adoption Counselor
          </label>
          <StandardForm.Input>
            <input
              type="checkbox"
              id="counselor"
              name="volunteer[be_adoption_counselor]"
              value="1"
            />
          </StandardForm.Input>

          <StandardForm.FullWidth>
            <p>
              Please tell us what motivated you to volunteer, and of any special
              skills you may have in the area you are choosing.
            </p>

            <textarea name="volunteer[motivation]" required maxLength="1024" />

            <p className={cx('thanks')}>
              <strong>Thank you in advance for helping the animals!</strong>
            </p>
          </StandardForm.FullWidth>
        </StandardForm>
      </div>
    </StandardLayout>
  )
}

export default VolunteerForm
