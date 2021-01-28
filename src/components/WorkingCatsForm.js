import React from 'react'
import classNames from 'classnames/bind'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './WorkingCatsForm.module.scss'

const cx = classNames.bind(styles)

const CheckboxListItem = ({ id, name, label }) => (
  <li>
    <label htmlFor={id}>
      <input name={name} type="hidden" value="0" />
      <input type="checkbox" {...{ id, name }} value="1" />
      {label}
    </label>
  </li>
)

const WorkingCatsForm = () => (
  <StandardLayout>
    <div className={cx('working-cat-form')}>
      <div className={cx('contact-text')}>
        <h1>Working Cats Application Form</h1>
        <hr />
        <p>
          Please FILL OUT ALL FIELDS in this Adoption Application and submit it.
          The form will be carefully reviewed by an adoption counsellor. We try
          to get applications reviewed as quickly as possible.
        </p>
        <p>
          * St. Francis Society is a privately owned, all volunteer
          organization. It is our responsibility to find permanent loving homes
          for all the animals under our care. We will be happy to work with you
          to choose an animal that suits your wants and lifestyle; however we DO
          have adoption guidelines and may deny an adoption we feel is
          unsuitable.
        </p>
      </div>

      <StandardForm
        action={`${PROTOCOL}://${HOSTNAME}/workcat_adopter_agreements`}
        className={cx('form')}
        submitProps={{
          className: cx('btn'),
          children: 'Submit Adoption Application',
        }}
      >
        <ul>
          <li>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="workcat_adopter_agreement[first_name]"
              autoFocus
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="workcat_adopter_agreement[last_name]"
            />
          </li>
          <li>
            <label htmlFor="email">Your E-mail Address *</label>
            <input
              type="email"
              id="email"
              name="workcat_adopter_agreement[email]"
            />
          </li>
          <li>
            <label htmlFor="address">Street Address *</label>
            <input
              type="text"
              id="address"
              name="workcat_adopter_agreement[address1]"
            />
          </li>
          <li>
            <label htmlFor="address2"></label>
            <input
              type="text"
              id="address2"
              name="workcat_adopter_agreement[address2]"
            />
          </li>
          <li>
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="workcat_adopter_agreement[city]"
            />
          </li>
          <li>
            <label htmlFor="state">State *</label>
            <StandardForm.Select
              id="state"
              options={states}
              name="workcat_adopter_agreement[state]"
            />
          </li>
          <li>
            <label htmlFor="zip">ZIP *</label>
            <input
              type="text"
              id="zip"
              name="workcat_adopter_agreement[postal_code]"
            />
          </li>
          <li>
            <label htmlFor="phone">Phone *</label>
            <StandardForm.Phone
              id="phone"
              name="workcat_adopter_agreement[phone]"
            />
          </li>
          <li>
            <label htmlFor="drivers-license">Driver's license #</label>
            <input
              type="text"
              id="drivers-license"
              name="workcat_adopter_agreement[driver_license_num]"
            />
          </li>
          <li>
            <label htmlFor="dl-state">Driver's license state issued</label>
            <StandardForm.Select
              id="dl-state"
              options={states}
              name="workcat_adopter_agreement[driver_license_state]"
            />
          </li>
          <li>
            <label htmlFor="facility-type">
              Type of facility which will shelter the cats
            </label>
            <StandardForm.Input>
              <ul className={cx('choice-list')}>
                {[
                  {
                    id: 'warehouse',
                    name: 'workcat_adopter_agreement[warehouse]',
                    label: 'Warehouse',
                  },
                  {
                    id: 'barn',
                    name: 'workcat_adopter_agreement[barn]',
                    label:
                      'Barn or other outbuilding in farm/ranch/stable setting',
                  },
                  {
                    id: 'residential',
                    name: 'workcat_adopter_agreement[residence]',
                    label: 'Residential property with shed/barn',
                  },
                ].map(checkBoxProps => (
                  <CheckboxListItem {...checkBoxProps} />
                ))}
                <li className={cx('other-location')}>
                  <label htmlFor="other-location">
                    Other
                    <textarea
                      id="other-location"
                      name="workcat_adopter_agreement[other_location]"
                    />
                  </label>
                </li>
              </ul>
            </StandardForm.Input>
          </li>
          <li>
            <label htmlFor="how-many">
              How many cats are you interested in adopting?
            </label>
            <input
              type="number"
              id="how-many"
              name="workcat_adopter_agreement[number_of_cats]"
            />
          </li>
          <StandardForm.RadioGroup
            label={`
              Are you willing to trap and provide future veterinary care as needed, including
              future vaccinations?
            `}
            name="workcat_adopter_agreement[provide_medical]"
            id="medical"
            inputs={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
          />
          <li>
            <label htmlFor="facility-type">
              What will you feed the cats? (Check all that apply)
            </label>
            <StandardForm.Input>
              <ul className={cx('choice-list')}>
                {[
                  {
                    id: 'feed-dry',
                    name: 'workcat_adopter_agreement[dry_food]',
                    label: 'Dry',
                  },
                  {
                    id: 'feed-wet',
                    name: 'workcat_adopter_agreement[wet_food]',
                    label: 'Wet',
                  },
                  {
                    id: 'feed-none',
                    name: 'workcat_adopter_agreement[no_food]',
                    label: 'No food provided',
                  },
                ].map(checkBoxProps => (
                  <CheckboxListItem {...checkBoxProps} />
                ))}
              </ul>
            </StandardForm.Input>
          </li>
          <StandardForm.RadioGroup
            label="Have you lost cats to coyotes or other predators?"
            name="workcat_adopter_agreement[coyotes]"
            id="lost-coyotes"
            inputs={[
              { label: 'Yes, several', value: 'Yes, several' },
              { label: 'Yes, but not many', value: 'Yes, but not many' },
              { label: 'No', value: 'No' },
            ]}
          />
          <li>
            <label htmlFor="anything-else">
              Is there anything else you would like us to know?
            </label>
            <textarea
              id="anything-else"
              name="workcat_adopter_agreement[additional_info]"
            />
          </li>
        </ul>
      </StandardForm>
    </div>
  </StandardLayout>
)

export default WorkingCatsForm
