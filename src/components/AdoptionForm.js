import React, { useState } from 'react'
import classNames from 'classnames/bind'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './AdoptionForm.module.scss'

const cx = classNames.bind(styles)

const AdoptionForm = () => {
  const [forYou, setForYou] = useState()
  const [otherAnimals, setOtherAnimals] = useState()
  const [givenUp, setGivenUp] = useState()

  const name = 'Bertil'

  return (
    <StandardLayout>
      <div className={cx('adoption-form')}>
        <div className={cx('contact-text')}>
          <h1>Adoption Application Form</h1>
          <hr/>
          <p>
            Please FILL OUT ALL FIELDS in this Adoption Application and submit it. The form will
            be carefully reviewed by an adoption counsellor. We try to get applications reviewed
            as quickly as possible. If we have problems contacting your references, this will
            delay the process. Most disapprovals result either from a negative veterinary
            reference, a "no pets" policy by landlords, or a difference in philosophy regarding
            the treatment of animals.
          </p>
          <p>
            Once this application is approved, you can arrange to pick up your new pet. You will
            receive a copy of the pets health record and a packet of information put together
            especially for you and your new pet by one of our volunteers.
          </p>
          <p>
            * St. Francis Society is a privately owned, all volunteer organization. It is our
            responsibility to find permanent loving homes for all the animals under our care. We
            will be happy to work with you to choose an animal that suits your wants and
            lifestyle; however we DO have adoption guidelines and may deny an adoption we feel is
            unsuitable. Our volunteers have the right to deny any adoption based on their own
            judgment.
          </p>
        </div>

        <StandardForm action='http://stfrancisrescue.org/adopter_agreements' className={cx('form')}>
          <ul>
            <li>
              <label htmlFor='firstName'>First Name *</label>
              <input type='text' id='firstName' name='adopter_agreement[first_name]' />
            </li>
            <li>
              <label htmlFor='lastName'>Last Name *</label>
              <input type='text' id='lastName' name='adopter_agreement[last_name]' />
            </li>
            <li>
              <label htmlFor='email'>Your E-mail Address *</label>
              <input type='text' id='email' name='adopter_agreement[email]' />
            </li>
            <li>
              <label htmlFor='address'>Street Address *</label>
              <input type='text' id='address' name='adopter_agreement[address]' />
            </li>
            <li>
              <label htmlFor='address2'></label>
              <input type='text' id='address2' name='adopter_agreement[address2]' />
            </li>
            <li>
              <label htmlFor='city'>City *</label>
              <input type='text' id='city' name='adopter_agreement[city]' />
            </li>
            <li>
              <label htmlFor='state'>State *</label>
              <StandardForm.Select id='state' options={states} name='adopter_agreement[state]' />
            </li>
            <li>
              <label htmlFor='zip'>ZIP</label>
              <input type='text' id='zip' name='adopter_agreement[postal_code]' />
            </li>
            <li>
              <label htmlFor='phone'>Phone</label>
              <input type='text' id='phone' name='adopter_agreement[phone]' />
            </li>
          </ul>

          <h2>General Questions</h2>

          <ul>
            <li>
              <label htmlFor='over-21'>Are you over 21?</label>
              <StandardForm.Input>
                <label htmlFor='over-21-yes'>
                  <input type='radio' id='over-21-yes' name='adopter_agreement[over_21]' value='true' />
                  Yes
                </label>
                <label htmlFor='over-21-no'>
                  <input type='radio' id='over-21-no' name='adopter_agreement[over_21]' value='false' />
                  No
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='reason'>Please give your reason for wanting to adopt {name}</label>
              <textarea id='reason' name='adopter_agreement[adoption_reason]' />
            </li>
            <li>
              <label htmlFor='for-you'>Is {name} for you or your family?</label>
              <StandardForm.Input>
                <label htmlFor='for-you-yes'>
                  <input
                    type='radio'
                    id='for-you-yes'
                    name='adopter_agreement[pet_for_adopter]'
                    checked={forYou || false}
                    onChange={() => setForYou(true)}
                    value='true'
                  />
                  Yes
                </label>
                <label htmlFor='for-you-no'>
                  <input
                    type='radio'
                    id='for-you-no'
                    name='adopter_agreement[pet_for_adopter]'
                    checked={forYou === false}
                    onChange={() => setForYou(false)}
                    value='false'
                  />
                  No
                </label>
              </StandardForm.Input>
            </li>
            {!forYou &&
              <li>
                <label htmlFor='for-who'>Who is {name} for?</label>
                <input type='text' id='for-who' name='adopter_agreement[pet_for_other]' />
              </li>
            }
            <li>
              <label htmlFor='location-kept'>Where will {name} be kept?</label>
              <StandardForm.Input>
                <label htmlFor='location-kept-inside'>
                  <input type='radio' id='location-kept-inside' name='adopter_agreement[keep_inside]' value='Inside' />
                  Inside
                </label>
                <label htmlFor='location-kept-outside'>
                  <input type='radio' id='location-kept-outside' name='adopter_agreement[keep_inside]' value='Outside' />
                  Outside
                </label>
                <label htmlFor='location-kept-both'>
                  <input type='radio' id='location-kept-both' name='adopter_agreement[keep_inside]' value='Both' />
                  Both
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='plan-declaw'>Do you plan to declaw?</label>
              <StandardForm.Input>
                <label htmlFor='plan-declaw-yes'>
                  <input type='radio' id='plan-declaw-yes' name='adopter_agreement[no_declaw]' value='true' />
                  Yes
                </label>
                <label htmlFor='plan-declaw-no'>
                  <input type='radio' id='plan-declaw-no' name='adopter_agreement[no_declaw]' value='false' />
                  No
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='other-animals'>Are there other cats or dogs in the house?</label>
              <StandardForm.Input>
                <label htmlFor='other-animals-yes'>
                  <input
                    type='radio'
                    id='other-animals-yes'
                    name='adopter_agreement[owned_other_animals]'
                    checked={otherAnimals || false}
                    onChange={() => setOtherAnimals(true)}
                    value='true'
                  />
                  Yes
                </label>
                <label htmlFor='other-animals-no'>
                  <input
                    type='radio'
                    id='other-animals-no'
                    name='adopter_agreement[owned_other_animals]'
                    checked={otherAnimals === false}
                    onChange={() => setOtherAnimals(false)}
                    value='false'
                  />
                  No
                </label>
              </StandardForm.Input>
            </li>
            {otherAnimals &&
              <>
                <li>
                  <label htmlFor='other-neutered'>
                    Are the other animals in your household spayed or neutered?	
                  </label>
                  <StandardForm.Input>
                    <label htmlFor='other-neutered-yes'>
                      <input
                        type='radio'
                        id='other-neutered-yes'
                        name='adopter_agreement[other_animals_spayed_neutered]' value='true'
                      />
                      Yes
                    </label>
                    <label htmlFor='other-neutered-no'>
                      <input
                        type='radio'
                        id='other-neutered-no'
                        name='adopter_agreement[other_animals_spayed_neutered]'
                        value='false'
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </li>
                <li>
                  <label htmlFor='vet-clinic'>
                    What is the name of your most recent Veterinarian Clinic?
                  </label>
                  <input type='text' id='vet-clinic' name='adopter_agreement[veterinarian_clinic]' />
                </li>
              </>
            }
            <li>
              <label htmlFor='any-allergic'>Is anyone in the household allergic to cats?</label>
              <StandardForm.Input>
                <label htmlFor='any-allergic-yes'>
                  <input type='radio' id='any-allergic-yes' name='adopter_agreement[allergies]' value='true' />
                  Yes
                </label>
                <label htmlFor='any-allergic-no'>
                  <input type='radio' id='any-allergic-no' name='adopter_agreement[allergies]' value='false' />
                  No
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='given-up'>Have you ever given up an animal?</label>
              <StandardForm.Input>
                <label htmlFor='given-up-yes'>
                  <input
                    type='radio'
                    id='given-up-yes'
                    name='adopter_agreement[given_up_animal]'
                    checked={givenUp || false}
                    onChange={() => setGivenUp(true)}
                    value='true'
                  />
                  Yes
                </label>
                <label htmlFor='given-up-no'>
                  <input
                    type='radio'
                    id='given-up-no'
                    name='adopter_agreement[given_up_animal]'
                    checked={givenUp === false}
                    onChange={() => setGivenUp(false)}
                    value='false'
                  />
                  No
                </label>
              </StandardForm.Input>
            </li>
            {givenUp &&
              <li>
                <label htmlFor='explain-giving-up'>Please explain why</label>
                <textarea id='explain-giving-up' name='adopter_agreement[given_up_animal_reason]' />
              </li>
            }
          </ul>

          <button className={cx('btn')} type='submit'>Submit Volunteer Application</button>
        </StandardForm>
      </div>
    </StandardLayout>
  )
}

export default AdoptionForm
