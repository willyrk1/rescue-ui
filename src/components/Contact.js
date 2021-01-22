import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

const Contact = () => (
  <StandardLayout>
    <div className={cx('contact')}>
      <div className={cx('contact-text')}>
        <h1>Contact Us</h1>
        <hr />
        <p>
          If you are concerned about a loose animal, unleashed dog, abuse or
          neglect of an animal, contact Hillsborough County Pet Resource Center
          at (813) 744-5660.
        </p>
        <p>
          We are an all volunteer group and therefore we can't always respond as
          quickly as we would like. If you need to get an answer now or have an
          immediate need regarding a dog or cat, please contact the Humane
          Society of Tampa at (813) 876-7138 or Hillsborough County Pet Resource
          Center at (813) 744-5660.
        </p>
        <p>
          We would like to take in all animals but we are LIMITED due to space
          in foster homes. Our responses will be based on the availability of
          space and funds available.
        </p>
        <p>
          If you are inquiring about volunteering for St Francis and are at
          least 18 years old, fill out a{' '}
          <Link to="/volunteer">Volunteer Form</Link>.
        </p>
      </div>

      <h2>Contact Form</h2>
      <StandardForm
        action={`${PROTOCOL}://${HOSTNAME}/contact_forms`}
        className={cx('form')}
        submitProps={{
          className: cx('btn'),
          children: 'Submit Contact Form',
        }}
      >
        <ul>
          <li>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="contact_form[first_name]"
              required
              maxLength="30"
              autoFocus
            />
          </li>
          <li>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="contact_form[last_name]"
              required
              maxLength="30"
            />
          </li>
          <li>
            <label htmlFor="email">E-mail Address *</label>
            <input
              type="text"
              id="email"
              name="contact_form[email]"
              required
              maxLength="255"
            />
          </li>
          <li>
            <label htmlFor="address">Street Address</label>
            <input
              type="text"
              id="address"
              name="contact_form[address]"
              maxLength="255"
            />
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="contact_form[city]"
              maxLength="255"
            />
          </li>
          <li>
            <label htmlFor="state">State</label>
            <StandardForm.Select options={states} name="contact_form[state]" />
          </li>
          <li>
            <label htmlFor="zip">ZIP</label>
            <input
              type="text"
              id="zip"
              name="contact_form[postal_code]"
              maxLength="255"
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <StandardForm.Phone
              id="phone"
              name="contact_form[phone]"
              maxLength="255"
            />
          </li>
          <StandardForm.RadioGroup
            label="Would you like to subscribe to our e-mail newsletter?"
            name="contact_form[subscribe_newsletter]"
            id="subscribe"
            inputs={[
              { label: 'Yes, I would', value: 'true' },
              { label: 'No, I would not', value: 'false' },
            ]}
          />
          <StandardForm.RadioGroup
            label="I am contacting you regarding a *"
            name="contact_form[contact_regarding]"
            id="regarding"
            inputs={[
              { label: 'Cat', value: 'cat' },
              { label: 'Dog', value: 'dog' },
              { label: 'Other', value: 'other' },
            ]}
            required
            maxLength="255"
          />
          <li>
            <label htmlFor="comment">Your comments or questions *</label>
            <textarea
              id="comment"
              name="contact_form[comments]"
              required
              maxLength="1024"
            />
          </li>
        </ul>
      </StandardForm>
    </div>
  </StandardLayout>
)

export default Contact
