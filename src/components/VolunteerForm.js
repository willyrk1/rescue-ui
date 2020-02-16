import React, { useState } from 'react';
import classNames from 'classnames/bind'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './VolunteerForm.module.scss';

const cx = classNames.bind(styles)

const VolunteerForm = () => {
  const [fosterInterest, setFosterInterest] = useState()

  return (
    <StandardLayout>
      <div className={cx('volunteer-form')}>
        <div className={cx('contact-text')}>
          <h1>Volunteer Application Form</h1>
          <hr/>
          <p>
            St. Francis Animal Rescue has taken in and adopted out over 14,000 animals since we were
            founded in August of 1997. We couldn't do it without the help of our volunteers. Thank
            you for your interest in becoming a St. Francis Society volunteer! Please indicate below
            how you would like to help out.
          </p>
        </div>

        <StandardForm action='http://stfrancisrescue.org/volunteers' className={cx('form')}>
          <ul>
            <li>
              <label htmlFor='firstName'>First Name *</label>
              <input type='text' id='firstName' name='volunteer[person_attributes][first_name]' />
            </li>
            <li>
              <label htmlFor='lastName'>Last Name *</label>
              <input type='text' id='lastName' name='volunteer[person_attributes][last_name]' />
            </li>
            <li>
              <label htmlFor='email'>Your E-mail Address *</label>
              <input type='text' id='email' name='volunteer[person_attributes][email]' />
            </li>
            <li>
              <label htmlFor='address'>Street Address *</label>
              <input type='text' id='address' name='volunteer[person_attributes][address1]' />
            </li>
            <li>
              <label htmlFor='address2'></label>
              <input type='text' id='address2' name='volunteer[person_attributes][address2]' />
            </li>
            <li>
              <label htmlFor='city'>City *</label>
              <input type='text' id='city' name='volunteer[person_attributes][city]' />
            </li>
            <li>
              <label htmlFor='state'>State *</label>
              <StandardForm.Select id='state' options={states} name='volunteer[person_attributes][state]' />
            </li>
            <li>
              <label htmlFor='zip'>ZIP</label>
              <input type='text' id='zip' name='volunteer[person_attributes][postal_code]' />
            </li>
            <li>
              <label htmlFor='phone'>Phone</label>
              <input type='text' id='phone' name='volunteer[person_attributes][phone]' />
            </li>
            <li>
              <label htmlFor='email-contact'>
                Is email a good way to contact you for schedule changes, announcements, special
                events, etc.?
              </label>
              <StandardForm.Input>
                <label htmlFor='email-contact-yes'>
                  <input type='radio' id='email-contact-yes' name='volunteer[use_email]' value='true' />
                  Yes
                </label>
                <label htmlFor='subcribe-no'>
                  <input type='radio' id='email-contact-no' name='volunteer[use_email]' value='false' />
                  No
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='under-18'>Are you under 18 years of age?</label>
              <StandardForm.Input>
                <label htmlFor='under-18-yes'>
                  <input type='radio' id='under-18-yes' name='volunteer[under_18]' value='true' />
                  Yes
                </label>
                <label htmlFor='under-18-no'>
                  <input type='radio' id='under-18-no' name='volunteer[under_18]' value='false' />
                  No
                </label>
              </StandardForm.Input>
            </li>
            <li>
              <label htmlFor='rather'>Do You Want Work With</label>
              <StandardForm.Input>
                <label htmlFor='rather-cats'>
                  <input type='checkbox' id='rather-cats' name='volunteer[work_with_cats]' value='1' />
                  Cats/kittens
                </label>
                <label htmlFor='rather-dogs'>
                  <input type='checkbox' id='rather-dogs' name='volunteer[work_with_dogs]' value='1' />
                  Dogs
                </label>
              </StandardForm.Input>
            </li>
          </ul>

          <p>
            There are several ways you can benefit St Francis as a volunteer. We desperately need
            foster homes for our animals and help at our adoption centers working to get them
            adopted. We also need dog handlers that can show our dogs at adoption events and welcome
            anyone with experience in marketing and fund raising/grant writing.
          </p>

          <h2>Fostering</h2>
          <p>
            All our animals go into a foster home before they are adopted. This allows us to get a
            feel for their personality and temperament so we can match them properly with potential
            adopters. St Francis provides all veterinary care that is needed to get the animal ready
            for adoption (spay/neuter, vaccinations, worming, etc). It is the responsibility of the
            foster to bring their foster animal(s) to our vet for services and ultimately to our
            adoption center when they are ready for adoption. We advertise all animals ready for
            adoption on our website so we may we get an online adoption request for an animal in
            foster care. In that case the foster can either arrange to have the potential adopter
            visit the animal in their home or arrange to meet them with the animal at an adoption center.
          </p>

          <ul>
            <li>
              <label htmlFor='foster-interest'>I'm interested in being a Foster</label>
              {/* <input
                type='checkbox'
                id='fosterInterest'
                checked={fosterInterest}
                onChange={() => setFosterInterest(!fosterInterest)}
              /> */}
              <StandardForm.Input>
                <label htmlFor='foster-interest-yes'>
                  <input
                    type='radio'
                    id='foster-interest-yes'
                    checked={fosterInterest || false}
                    onChange={() => setFosterInterest(true)}
                  />
                  Yes
                </label>
                <label htmlFor='foster-interest-no'>
                  <input
                    type='radio'
                    id='foster-interest-no'
                    checked={fosterInterest === false}
                    onChange={() => setFosterInterest(false)}
                  />
                  No
                </label>
              </StandardForm.Input>
            </li>
            {fosterInterest &&
              <>
                <li>
                  <label htmlFor='provide-food'>
                    Are you able to provide food and litter for the animals you foster?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor='provide-food-yes'>
                      <input
                        type='radio'
                        id='provide-food-yes'
                        name='volunteer[will_provide_supplies_for_fostered]'
                        value='true'
                      />
                      Yes
                    </label>
                    <label htmlFor='provide-food-no'>
                      <input
                        type='radio'
                        id='provide-food-no'
                        name='volunteer[will_provide_supplies_for_fostered]'
                        value='false'
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </li>
                <li>
                  <label htmlFor='provide-vet'>
                    Are you willing to bring your foster animal(s) to our veterinarian for exams,
                    vaccinations, spay/neuter?
                  </label>
                  <StandardForm.Input>
                    <label htmlFor='provide-vet-yes'>
                      <input
                        type='radio'
                        id='provide-vet-yes'
                        name='volunteer[will_bring_fostered_to_vet]'
                        value='true'
                      />
                      Yes
                    </label>
                    <label htmlFor='provide-vet-no'>
                      <input
                        type='radio'
                        id='provide-vet-no'
                        name='volunteer[will_bring_fostered_to_vet]'
                        value='false'
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </li>
              </>
            }
          </ul>

          <button className={cx('btn')} type='submit'>Submit Volunteer Application</button>
        </StandardForm>
      </div>
    </StandardLayout>
  )
}

export default VolunteerForm
