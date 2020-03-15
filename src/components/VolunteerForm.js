import React, { useState } from 'react';
import classNames from 'classnames/bind'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './VolunteerForm.module.scss';

const cx = classNames.bind(styles)

const VolunteerForm = () => {
  const [fosterInterest, setFosterInterest] = useState()
  const [fosterCats, setFosterCats] = useState(false)
  const [fosterDogs, setFosterDogs] = useState(false)
  const [ownOthers, setOwnOthers] = useState(false)

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
              <label htmlFor='zip'>ZIP *</label>
              <input type='text' id='zip' name='volunteer[person_attributes][postal_code]' />
            </li>
            <li>
              <label htmlFor='phone'>Phone *</label>
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
                <label htmlFor='email-contact-no'>
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
                  <input
                    type='checkbox'
                    id='rather-cats'
                    name='volunteer[work_with_cats]'
                    value='1'
                  />
                  Cats/kittens
                </label>
                <label htmlFor='rather-dogs'>
                  <input
                    type='checkbox'
                    id='rather-dogs'
                    name='volunteer[work_with_dogs]'
                    value='1'
                  />
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
                <li>
                  <label htmlFor='foster-choice'>Do you want to foster:</label>
                  <StandardForm.Input>
                    <label htmlFor='foster-choice-cats'>
                      <input
                        type='checkbox'
                        id='foster-choice-cats'
                        checked={fosterCats}
                        onChange={() => setFosterCats(!fosterCats)}
                        name='volunteer[foster_cats]'
                        value='1'
                      />
                      Cats/kittens
                    </label>
                    <label htmlFor='foster-choice-dogs'>
                      <input
                        type='checkbox'
                        id='foster-choice-dogs'
                        checked={fosterDogs}
                        onChange={() => setFosterDogs(!fosterDogs)}
                        name='volunteer[foster_dogs]'
                        value='1'
                      />
                      Dogs
                    </label>
                  </StandardForm.Input>
                </li>
              </>
            }
          </ul>

          {fosterInterest &&
            <>
              {fosterCats &&
                <>
                  <p className={cx('fosterNote')}>
                    <strong>CATS:</strong> Our cats stay in foster care until a cage is available at an
                    adoption center. Once they go into a cage at the adoption center, they remain there
                    for a week or so and then they go back to the foster home for a short cage break
                    before coming back to the adoption center.
                  </p>
                  <ul>
                    <li>
                      <label htmlFor='cat-show'>
                        Are you willing to take your foster cat to our adoption center when a cage is available?
                      </label>
                      <StandardForm.Input>
                        <label htmlFor='cat-show-yes'>
                          <input
                            type='radio'
                            id='cat-show-yes'
                            name='volunteer[will_take_foster_cat_to_adoption_center]'
                            value='true'
                          />
                          Yes
                        </label>
                        <label htmlFor='cat-show-no'>
                          <input
                            type='radio'
                            id='cat-show-no'
                            name='volunteer[will_take_foster_cat_to_adoption_center]'
                            value='false'
                          />
                          No
                        </label>
                      </StandardForm.Input>
                    </li>
                  </ul>
                </>
              }

              {fosterDogs &&
                <>
                  <p className={cx('fosterNote')}>
                    <strong>DOGS:</strong> Fosters should be willing to bring their foster dog to the
                    adoption center for viewing when requested. Occasionally we have special adoption
                    events and request the foster bring their dog for viewing if possible.
                  </p>
                  <ul>
                    <li>
                      <label htmlFor='dog-show'>
                        Are you willing to take your foster dog to adoption events?
                      </label>
                      <StandardForm.Input>
                        <label htmlFor='dog-show-yes'>
                          <input
                            type='radio'
                            id='dog-show-yes'
                            name='volunteer[will_take_foster_dog_to_adoption_events]'
                            value='true'
                          />
                          Yes
                        </label>
                        <label htmlFor='dog-show-no'>
                          <input
                            type='radio'
                            id='dog-show-no'
                            name='volunteer[will_take_foster_dog_to_adoption_events]'
                            value='false'
                          />
                          No
                        </label>
                      </StandardForm.Input>
                    </li>
                  </ul>
                </>
              }
              <ul>
                <li>
                  <label htmlFor='own-rent'>Do you:</label>
                  <StandardForm.Input>
                    <label htmlFor='own-rent-own'>
                      <input
                        type='radio'
                        id='own-rent-own'
                        name='volunteer[own_home]'
                        value='true'
                      />
                      Own
                    </label>
                    <label htmlFor='own-rent-rent'>
                      <input
                        type='radio'
                        id='own-rent-rent'
                        name='volunteer[own_home]'
                        value='false'
                      />
                      Rent
                    </label>
                  </StandardForm.Input>
                </li>
                <li>
                  <label htmlFor='own-other'>Do you own other animals?</label>
                  <StandardForm.Input>
                    <label htmlFor='own-other-yes'>
                      <input
                        type='radio'
                        id='own-other-yes'
                        name='volunteer[own_other_animals]'
                        checked={ownOthers}
                        onChange={() => setOwnOthers(true)}
                        value='true'
                      />
                      Yes
                    </label>
                    <label htmlFor='own-other-no'>
                      <input
                        type='radio'
                        id='own-other-no'
                        name='volunteer[own_other_animals]'
                        checked={!ownOthers}
                        onChange={() => setOwnOthers(false)}
                        value='false'
                      />
                      No
                    </label>
                  </StandardForm.Input>
                </li>
                {ownOthers &&
                  <>
                    <li>
                      <label htmlFor='spayed'>Are your animals spayed/neutered?</label>
                      <StandardForm.Input>
                        <label htmlFor='spayed-yes'>
                          <input
                            type='radio'
                            id='spayed-yes'
                            name='volunteer[owned_animals_spayed_neutered]'
                            value='true'
                          />
                          Yes
                        </label>
                        <label htmlFor='spayed-no'>
                          <input
                            type='radio'
                            id='spayed-no'
                            name='volunteer[owned_animals_spayed_neutered]'
                            value='false'
                          />
                          No
                        </label>
                      </StandardForm.Input>
                    </li>
                    <li>
                      <label htmlFor='vaccinated'>
                        Are your animals current on their vaccinations?
                      </label>
                      <StandardForm.Input>
                        <label htmlFor='vaccinated-yes'>
                          <input
                            type='radio'
                            id='vaccinated-yes'
                            name='volunteer[owned_animals_vaccines_current]'
                            value='true'
                          />
                          Yes
                        </label>
                        <label htmlFor='vaccinated-no'>
                          <input
                            type='radio'
                            id='vaccinated-no'
                            name='volunteer[owned_animals_vaccines_current]'
                            value='false'
                          />
                          No
                        </label>
                      </StandardForm.Input>
                    </li>
                    <li>
                      <label htmlFor='flea-prevent'>
                        Are your animals on any flea prevention?
                      </label>
                      <StandardForm.Input>
                        <label htmlFor='flea-prevent-yes'>
                          <input
                            type='radio'
                            id='flea-prevent-yes'
                            name='volunteer[use_flea_prevention]'
                            value='true'
                          />
                          Yes
                        </label>
                        <label htmlFor='flea-prevent-no'>
                          <input
                            type='radio'
                            id='flea-prevent-no'
                            name='volunteer[use_flea_prevention]'
                            value='false'
                          />
                          No
                        </label>
                      </StandardForm.Input>
                    </li>
                    <li>
                      <label htmlFor='vet-clinic'>Current veterinary clinic:</label>
                      <input type='text' id='vet-clinic' name='volunteer[veterinarian_name]' />
                    </li>
                  </>
                }
              </ul>
            </>
          }

          <h2>Adoption Centers</h2>
          <p>
            There are three ways to help out at our adoption centers, Kennelling, Adoption
            Counsellor and Dog Handler.
          </p>
          <p>
            <strong>Kennelling:</strong> Twice a day we let our cats out of their cage for
            excercise, playtime and love. During that time their cage is cleaned and fresh water
            and food (if needed) is provided. Petsmart kennels for us in the morning, we kennel in
            the evening. For example, some volunteers pick a certain day of the week or maybe
            every other particular weekday. Some volunteers fill in where there are gaps in the
            schedule for the month. We try to make it flexible for the volunteers.
          </p>

          <ul>
            <li>
              <label htmlFor='kenneller'>I would like to be a Kenneller</label>
              <StandardForm.Input>
                <input
                  type='checkbox'
                  id='kenneller'
                  name='volunteer[be_kenneller]'
                  value='1'
                />
              </StandardForm.Input>
            </li>
          </ul>

          <p>
            <strong>Adoption Counselor:</strong> Adoption Counselors screen prospective adopters
            at the adoption centers. They work to try and match a potential adopter with a cat that
            fits the personality and temperament they are looking for. If
            you choose to be an adoption counselor, we ask that you commit to work the adoption
            center at least one day a month.
          </p>

          <ul>
            <li>
              <label htmlFor='counselor'>I would like to be an Adoption Counselor</label>
              <StandardForm.Input>
                <input
                  type='checkbox'
                  id='counselor'
                  name='volunteer[be_adoption_counselor]'
                  value='1'
                />
              </StandardForm.Input>
            </li>
          </ul>

          <p>
            <strong>Dog Handler:</strong> Dog handlers assist fosters by showing dogs at adoption
            events and talking to potential adopters about the dog's personality and likes/dislikes.
          </p>

          <ul>
            <li>
              <label htmlFor='dog-handler'>I would like to be a Dog Handler</label>
              <StandardForm.Input>
                <input
                  type='checkbox'
                  id='dog-handler'
                  name='volunteer[be_dog_handler]'
                  value='1'
                />
              </StandardForm.Input>
            </li>
          </ul>

          <p>
            Please tell us what motivated you to volunteer, and of any special skills you may have
            in the area you are choosing.
          </p>

          <textarea name='volunteer[motivation]' />

          <p className={cx('thanks')}><strong>Thank you in advance for helping the animals!</strong></p>

          <button className={cx('btn')} type='submit'>Submit Volunteer Application</button>
        </StandardForm>
      </div>
    </StandardLayout>
  )
}

export default VolunteerForm
