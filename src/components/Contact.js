import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import Select from 'react-select'
import StFrancisRescue from '../apis/StFrancisRescue';
import states from '../config/states'
import Layout from './Layout'
import styles from './Contact.module.scss';

const cx = classNames.bind(styles)

const Contact = () =>
  <Layout>
    <div className={cx('contact')}>
      <div className={cx('contact-text')}>
        <h1>Contact Us</h1>
        <hr/>
        <p>
          If you are concerned about a loose animal, unleashed dog, abuse or neglect of an animal,
          contact Hillsborough County Pet Resource Center at (813) 744-5660.
        </p>
        <p>
          We are an all volunteer group and therefore we can't always respond as quickly as we
          would like. If you need to get an answer now or have an immediate need regarding a dog
          or cat, please contact the Humane Society of Tampa at (813) 876-7138 or Hillsborough
          County Pet Resource Center at (813) 744-5660.
        </p>
        <p>
          We would like to take in all animals but we are LIMITED due to space in foster homes.
          Our responses will be based on the availability of space and funds available.
        </p>
        <p>
          If you are inquiring about volunteering for St Francis and are at least 18 years old,
          fill out a <Link to="/volunteer">Volunteer Form</Link>.
        </p>
      </div>

      <h2>Contact Form</h2>
      <form action='http://stfrancisrescue.org/contact_forms'>
        <ul>
          <li>
            <label htmlFor='firstName'>First Name *</label>
            <input type='text' id='firstName' />
          </li>
          <li>
            <label htmlFor='lastName'>Last Name *</label>
            <input type='text' id='lastName' />
          </li>
          <li>
            <label htmlFor='email'>E-mail Address *</label>
            <input type='text' id='email' />
          </li>
          <li>
            <label htmlFor='address'>Street Address</label>
            <input type='text' id='address' />
          </li>
          <li>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' />
          </li>
          <li>
            <label htmlFor='state'>State</label>
            <Select options={states} className={cx('input-select')} />
          </li>
          <li>
            <label htmlFor='zip'>ZIP</label>
            <input type='text' id='zip' />
          </li>
          <li>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' />
          </li>
          <li>
            <label htmlFor='subscribe'>Would you like to subscribe to our e-mail newsletter?</label>
            <div className={cx('input')}>
              <label for='subcribe-yes'>
                <input type='radio' id='subcribe-yes' name='subscribe' />
                Yes, I would
              </label>
              <label for='subcribe-no'>
                <input type='radio' id='subcribe-no' name='subscribe' />
                No, I would not
              </label>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </Layout>

export default Contact;
