import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import DonateButton from './DonateButton'
import SubscribeForm from './SubscribeForm'
import styles from './Donate.module.scss'
import zelleLogo from '../assets/images/Zelle.png'

const cx = classNames.bind(styles)

const Donate = () => (
  <StandardLayout legal>
    <div className={cx('donate')}>
      <h1>Donate</h1>
      <hr />

      <p>
        Each year, St. Francis Society helps find homes for over 2,000
        animals. Nearly half of those are saved from euthanasia at local
        animal shelters, and the others are rescued from the community.
        Additionally, each year, we trap/neuter/vaccinate and return
        thousands of feral cats in the Tampa community.
        We are a 501c3 non-profit organization
        and receive no government funding. We have no paid employees so 100% of
        every dollar you donate goes to the animals we take care of. We are
        completely dependent on the community's donations to help us continue
        our life saving mission.
      </p>

      <h2>Make a One Time Donation</h2>
      <p>
        Click the "Donate" button and enter the amount you would like to donate.
        Please be sure the amount you enter reflects your intent. For instance,
        we've experienced donations intended to be $50 dollars being entered as
        $0.50 cents. Zelle donations should be sent to stfrancissociety@gmail.com.
        Thank You!!!
      </p>

      <div className={cx('choices')}>
        <DonateButton />
        <img alt="Zelle" src={zelleLogo} />
      </div>

      <h2 id="monthly">
        Become a St. Francis Society Guardian Angel (monthly donor)
      </h2>
      <p>
        Becoming one of our Guardian Angels provides St. Francis Society Animal
        Rescue with a sustainable income we can rely on. Your monthly gift helps
        us to continue providing the animals in our care with essentials such as
        food, medicine, litter, and spay/neuter surgeries.
      </p>

      <h3>Here's how your monthly donation can help</h3>
      <ul>
        <li>$10 can feed a kitten for a week</li>
        <li>$25 can vaccinate and microchip one animal</li>
        <li>$50 can spay or neuter one animal</li>
        <li>$100 helps provide life-saving medication</li>
        <li>$200 can save the lives of a litter of kittens</li>
      </ul>

      <p>
        Select the monthly donation amount you would like to make from the
        dropdown list and then click on the "Subscribe" button. Thank You!!!
      </p>

      <p className={cx('levels')}>Donation Levels</p>

      <SubscribeForm className={cx('subscribe')} />

      <h3>If you prefer to send a check, mail it to:</h3>
      <p>
        St. Francis Society Animal Rescue
        <br />
        PO Box 261614
        <br />
        Tampa, Fl 33685-1614
      </p>

      <h2>Donor Privacy Policy</h2>
      <p>
        Our Commitment to Our Donors - St. Francis Society, Inc. will not sell, share or trade our
        donors' names or personal information with any other entity, nor send mailings to our
        donors on behalf of other organizations.
      </p>
      <p>
        This policy applies to all information received by St. Francis Society, Inc., both online
        and offline, on any platform, as well as any electronic, written or oral communications.
      </p>
      <p>
        To the extent any donations are processed through a third-party service provider, our
        donors' information will only be used for purposes necessary to process the donation.
      </p>
    </div>
  </StandardLayout>
)

export default Donate
