import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { URI } from '../config/StFrancisRescue'
import states from '../config/states'
import { usePetData } from '../context/GlobalDataContext'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './AdoptionForm.module.scss'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

const AdoptionForm = () => {
  const { petType, list, animalId } = useParams()
  const [forYou, setForYou] = useState()
  const [otherAnimals, setOtherAnimals] = useState()
  const [othersSpayed, setOthersSpayed] = useState()
  const [givenUp, setGivenUp] = useState()
  const [workSchool, setWorkSchool] = useState()

  const petData = usePetData()
  const { name } =
    (petData && petData[petType][list].find(({ id }) => id === +animalId)) || {}

  return (
    <StandardLayout>
      <div className={cx('adoption-form')}>
        <div className={cx('contact-text')}>
          <h1>Adoption Application Form</h1>
          <hr />
          <p>
            Please FILL OUT ALL FIELDS in this Adoption Application and submit
            it. The form will be carefully reviewed by an adoption counsellor.
            We try to get applications reviewed as quickly as possible. If we
            have problems contacting your references, this will delay the
            process. Most disapprovals result either from a negative veterinary
            reference, a "no pets" policy by landlords, or a difference in
            philosophy regarding the treatment of animals.
          </p>
          <p>
            Once this application is approved, you can arrange to pick up your
            new pet. You will receive a copy of the pets health record and a
            packet of information put together especially for you and your new
            pet by one of our volunteers.
          </p>
          <p>
            * St. Francis Society is a privately owned, all volunteer
            organization. It is our responsibility to find permanent loving
            homes for all the animals under our care. We will be happy to work
            with you to choose an animal that suits your wants and lifestyle;
            however we DO have adoption guidelines and may deny an adoption we
            feel is unsuitable. Our volunteers have the right to deny any
            adoption based on their own judgment.
          </p>
        </div>

        <StandardForm
          action={`${URI}/adopter_agreements`}
          className={cx('form')}
          submitProps={{
            className: cx('btn'),
            children: 'Submit Adoption Application',
          }}
        >
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="adopter_agreement[first_name]"
            required
            maxLength="30"
            autoFocus
          />
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="adopter_agreement[last_name]"
            required
            maxLength="30"
          />
          <label htmlFor="email">Your E-mail Address *</label>
          <input
            type="email"
            id="email"
            name="adopter_agreement[email]"
            required
            maxLength="40"
          />
          <label htmlFor="address">Street Address *</label>
          <input
            type="text"
            id="address"
            name="adopter_agreement[address]"
            required
            maxLength="80"
          />
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="adopter_agreement[city]"
            required
            maxLength="20"
          />
          <label htmlFor="state">State *</label>
          <StandardForm.Select
            id="state"
            options={states}
            name="adopter_agreement[state]"
            required
          />
          <label htmlFor="zip">ZIP *</label>
          <input
            type="text"
            id="zip"
            name="adopter_agreement[postal_code]"
            required
            maxLength="10"
          />
          <label htmlFor="phone">Phone *</label>
          <StandardForm.Phone
            id="phone"
            name="adopter_agreement[phone]"
            required
            maxLength="12"
          />

          <StandardForm.FullWidth>
            <h2>General Questions</h2>
          </StandardForm.FullWidth>

          <label htmlFor="over-21">Are you at least 18 years old? *</label>
          <StandardForm.Input>
            <label htmlFor="over-21-yes">
              <input
                type="radio"
                id="over-21-yes"
                name="adopter_agreement[over_21]"
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="over-21-no">
              <input
                type="radio"
                id="over-21-no"
                name="adopter_agreement[over_21]"
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          <label htmlFor="reason">
            Please give your reason for wanting to adopt {name} *
          </label>
          <textarea
            id="reason"
            name="adopter_agreement[adoption_reason]"
            required
            maxLength="1024"
          />
          <label htmlFor="for-you">Is {name} for you or your family? *</label>
          <StandardForm.Input>
            <label htmlFor="for-you-yes">
              <input
                type="radio"
                id="for-you-yes"
                name="adopter_agreement[pet_for_adopter]"
                checked={forYou || false}
                onChange={() => setForYou(true)}
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="for-you-no">
              <input
                type="radio"
                id="for-you-no"
                name="adopter_agreement[pet_for_adopter]"
                checked={forYou === false}
                onChange={() => setForYou(false)}
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          {forYou === false && (
            <>
              <label htmlFor="for-who">Who is {name} for? *</label>
              <input
                type="text"
                id="for-who"
                name="adopter_agreement[pet_for_other]"
                required
                maxLength="255"
              />
            </>
          )}
          <label htmlFor="location-kept">Where will {name} be kept? *</label>
          <StandardForm.Input>
            <label htmlFor="location-kept-inside">
              <input
                type="radio"
                id="location-kept-inside"
                name="adopter_agreement[keep_inside]"
                value="Inside"
                required
              />
              Inside
            </label>
            <label htmlFor="location-kept-outside">
              <input
                type="radio"
                id="location-kept-outside"
                name="adopter_agreement[keep_inside]"
                value="Outside"
              />
              Outside
            </label>
            <label htmlFor="location-kept-both">
              <input
                type="radio"
                id="location-kept-both"
                name="adopter_agreement[keep_inside]"
                value="Both"
              />
              Both
            </label>
          </StandardForm.Input>
          {petType === 'cats' && (
            <>
              <label htmlFor="plan-declaw">Do you plan to declaw? *</label>
              <StandardForm.Input>
                <label htmlFor="plan-declaw-yes">
                  <input
                    type="radio"
                    id="plan-declaw-yes"
                    name="adopter_agreement[no_declaw]"
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="plan-declaw-no">
                  <input
                    type="radio"
                    id="plan-declaw-no"
                    name="adopter_agreement[no_declaw]"
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
            </>
          )}
          <label htmlFor="other-animals">
            Are there other cats or dogs in the house? *
          </label>
          <StandardForm.Input>
            <label htmlFor="other-animals-yes">
              <input
                type="radio"
                id="other-animals-yes"
                name="adopter_agreement[owned_other_animals]"
                checked={otherAnimals || false}
                onChange={() => setOtherAnimals(true)}
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="other-animals-no">
              <input
                type="radio"
                id="other-animals-no"
                name="adopter_agreement[owned_other_animals]"
                checked={otherAnimals === false}
                onChange={() => setOtherAnimals(false)}
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          {otherAnimals && (
            <>
              <label htmlFor="other-neutered">
                Are the other animals in your household spayed or neutered? *
              </label>
              <StandardForm.Input>
                <label htmlFor="other-neutered-yes">
                  <input
                    type="radio"
                    id="other-neutered-yes"
                    name="adopter_agreement[other_animals_spayed_neutered]"
                    checked={othersSpayed || false}
                    onChange={() => setOthersSpayed(true)}
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="other-neutered-no">
                  <input
                    type="radio"
                    id="other-neutered-no"
                    name="adopter_agreement[other_animals_spayed_neutered]"
                    checked={othersSpayed === false}
                    onChange={() => setOthersSpayed(false)}
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
              {othersSpayed === false && (
                <>
                  <label htmlFor="reason-not-spayed">
                    Please explain why they are not spayed/neutered *
                  </label>
                  <textarea
                    id="reason-not-spayed"
                    name="adopter_agreement[other_animals_not_spayed_neutered_reason]"
                    required
                    maxLength={255}
                  />
                </>
              )}
              <label htmlFor="vet-clinic">
                What is the name of your most recent Veterinarian Clinic?
              </label>
              <input
                type="text"
                id="vet-clinic"
                name="adopter_agreement[veterinarian_clinic]"
                maxLength="255"
              />
            </>
          )}
          {petType === 'cats' && (
            <>
              <label htmlFor="any-allergic">
                Is anyone in the household allergic to cats? *
              </label>
              <StandardForm.Input>
                <label htmlFor="any-allergic-yes">
                  <input
                    type="radio"
                    id="any-allergic-yes"
                    name="adopter_agreement[allergies]"
                    value="true"
                    required
                  />
                  Yes
                </label>
                <label htmlFor="any-allergic-no">
                  <input
                    type="radio"
                    id="any-allergic-no"
                    name="adopter_agreement[allergies]"
                    value="false"
                  />
                  No
                </label>
              </StandardForm.Input>
            </>
          )}
          <label htmlFor="given-up">Have you ever given up an animal? *</label>
          <StandardForm.Input>
            <label htmlFor="given-up-yes">
              <input
                type="radio"
                id="given-up-yes"
                name="adopter_agreement[given_up_animal]"
                checked={givenUp || false}
                onChange={() => setGivenUp(true)}
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="given-up-no">
              <input
                type="radio"
                id="given-up-no"
                name="adopter_agreement[given_up_animal]"
                checked={givenUp === false}
                onChange={() => setGivenUp(false)}
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          {givenUp && (
            <>
              <label htmlFor="explain-giving-up">Please explain why *</label>
              <textarea
                id="explain-giving-up"
                name="adopter_agreement[given_up_animal_reason]"
                required
                maxLength="255"
              />
            </>
          )}
          <label htmlFor="work-school">
            Do you work outside the home or go to school? *
          </label>
          <StandardForm.Input>
            <label htmlFor="work-school-yes">
              <input
                type="radio"
                id="work-school-yes"
                name="adopter_agreement[employed_outside_home]"
                checked={workSchool || false}
                onChange={() => setWorkSchool(true)}
                value="true"
                required
              />
              Yes
            </label>
            <label htmlFor="work-school-no">
              <input
                type="radio"
                id="work-school-no"
                name="adopter_agreement[employed_outside_home]"
                checked={workSchool === false}
                onChange={() => setWorkSchool(false)}
                value="false"
              />
              No
            </label>
          </StandardForm.Input>
          {workSchool && (
            <>
              <label htmlFor="hours-out">
                How many hours a day are you away for work or school? *
              </label>
              <input
                type="text"
                id="hours-out"
                name="adopter_agreement[hours_away_from_home]"
                required
              />
            </>
          )}

          <StandardForm.FullWidth>
            <h2>Terms</h2>

            <p>
              If you are approved for adoption, please indicate whether you
              agree to the following terms:
            </p>
          </StandardForm.FullWidth>

          <StandardForm.RadioGroup
            label={`I will take ${name} to the vet within 3 weeks of adoption for an initial checkup and any follow-up vaccines or de-wormers. Further, I will take ${name} to the vet whenever medical services are needed. *`}
            name="adopter_agreement[safe_environment]"
            id="will-treat"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
            required
          />
          <StandardForm.RadioGroup
            label={`I will arrange for the care of ${name} during my absences (vacation, etc.). *`}
            name="adopter_agreement[absentee_care]"
            id="absentee-care"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
            required
          />
          <StandardForm.RadioGroup
            label={`
                I understand St. Francis has the right to confiscate ${name} if not being cared
                for properly (i.e. lack of food/water/shelter, roaming free, or any form of neglect). *
              `}
            name="adopter_agreement[permit_confiscation]"
            id="permit-confiscation"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
            required
          />
          {petType === 'dogs' && (
            <>
              <StandardForm.RadioGroup
                label={`
                    I will not allow ${name} to roam freely. I will obey leash laws. *
                  `}
                name="adopter_agreement[leash_laws]"
                id="leash-laws"
                inputs={[
                  { label: 'Yes', value: 'true' },
                  { label: 'No', value: 'false' },
                ]}
                required
              />
              <StandardForm.RadioGroup
                label={`
                    I will maintain ${name} on heartworm preventative medicine. *
                  `}
                name="adopter_agreement[preventative_medicine]"
                id="preventative-medicine"
                inputs={[
                  { label: 'Yes', value: 'true' },
                  { label: 'No', value: 'false' },
                ]}
                required
              />
            </>
          )}
          <StandardForm.RadioGroup
            label={`A minimum donation (depending on age and breed) is required for adoption. *`}
            name="adopter_agreement[minimum_donation]"
            id="minimum_donation"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
            required
          />
          <StandardForm.RadioGroup
            label={`
                I agree to allow communication from St. Francis to ensure a mutually satisfactory
                owner/pet relationship is established. *
              `}
            name="adopter_agreement[communication]"
            id="communication"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
            required
          />
          <label htmlFor="certify">
            I certify that the information provided is complete and correct. I
            understand if it is discovered I have given any untrue information,
            St. Francis Society has the right to confiscate {name} without a
            refund of my adoption fee. *
          </label>
          <StandardForm.Input>
            <input
              type="checkbox"
              id="certify"
              name="adopter_agreement[complete_accurate_information]"
              value="1"
              required
            />
          </StandardForm.Input>

          <input
            name="adopter_agreement[animal_id]"
            type="hidden"
            value={animalId}
          />
        </StandardForm>
      </div>
    </StandardLayout>
  )
}

export default AdoptionForm
