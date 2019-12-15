import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue';
import Layout from './Layout'
import styles from './Contact.module.scss';

const cx = classNames.bind(styles)

const Contact = () => {
  const [boardMembers, setBoardMembers] = useState()

  useEffect(() => {
    const loadBoardMembers = async () => {
      const { data } = await StFrancisRescue.getBoardMembers()
      setBoardMembers(data)
    }
    loadBoardMembers()
  }, [])

  return (
    <Layout>
      <div className={cx('contact')}>
        <h1>Contact Us</h1>
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
    </Layout>
  )
}

export default Contact;
