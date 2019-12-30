import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import styles from './Adopt.module.scss';
import catPhoto from '../assets/images/boywithcathighres.jpg'
import dogPhoto from '../assets/images/girlhuggingdog.jpg'
import workingCatPhoto from '../assets/images/barncatHIGHREScrop.jpg'

const cx = classNames.bind(styles)

const Adopt = () =>
  <StandardLayout>
    <div className={cx('adopt')}>
      <h1>Adoptions</h1>
      <hr/>
      <p>
        Thinking about adopting a pet?  Thank you for considering St. Francis Society!  We are
        an-all volunteer organization and most of our animals reside in private foster homes.  We
        do have some cats available at adoption centers throughout the Tampa Bay area which are noted as
        such on our <Link to='cat-adoptions'>Cat Adoption</Link> page.
      </p>
      <p>
        We have guidelines for an adoption approval and reserve the right to deny any adoption
        that we see as unsuitable for the animal and/or adopter. You must be at least 18 years
        of age to adopt.  If you have questions about an animal you see online, you may contact
        the foster directly.  If you are ready to adopt and want to fill out an application for
        a particular animal, please click the, "Want to Adopt Me?" button and someone will
        contact you shortly.  We look forward to helping you find your fur-ever friend!
      </p>
      <div className={cx('links')}>
        <div>
          <Link to='cat-adoptions'><img src={catPhoto}/></Link>
          <Link to='cat-adoptions' className={cx('caption')}>Cat Adoptions</Link>
        </div>
        <div>
          <Link to='dog-adoptions'><img src={dogPhoto}/></Link>
          <Link to='dog-adoptions' className={cx('caption')}>Dog Adoptions</Link>
        </div>
        <div>
          <Link to='working-cats'><img src={workingCatPhoto}/></Link>
          <Link to='working-cats' className={cx('caption')}>Working Cat Program</Link>
        </div>
      </div>
    </div>
  </StandardLayout>

export default Adopt
