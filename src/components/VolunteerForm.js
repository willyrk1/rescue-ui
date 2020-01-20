import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import states from '../config/states'
import StandardLayout from './StandardLayout'
import StandardForm from './StandardForm'
import styles from './VolunteerForm.module.scss';

const cx = classNames.bind(styles)

const VolunteerForm = () =>
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

      <StandardForm action='http://stfrancisrescue.org/contact_forms' className={cx('form')}>
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

        <a className={cx('btn')} href='#'>Submit Contact Form</a>
      </StandardForm>
    </div>
  </StandardLayout>

export default VolunteerForm
