import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import DonateButton from './DonateButton'
import SubscribeForm from './SubscribeForm'
import styles from './Donate.module.scss'

const cx = classNames.bind(styles)

const Donate = () => (
  <StandardLayout legal>
    <div className={cx('donate')}>
      <h1>Donate</h1>
      <hr />

      <p>
        Last year, St. Francis Society found homes for over 1,500 homeless
        animals. In addition, over 200 feral cats received TNVR services
        (trap/neuter/vaccinate/return). We are a 501(c)3 non-profit organization
        and receive no government funding. We have no paid employees so 100% of
        every dollar you donate goes to the animals we take care of. We are
        completely dependent on the community’s donations to help us continue
        our life saving mission.
      </p>

      <h2>Make a One Time Donation</h2>
      <p>
        Click the "Donate" button and enter the amount you would like to donate.
        Please be sure the amount you enter reflects your intent. For instance,
        we've experienced donations intended to be $50 dollars being entered as
        $0.50 cents. Thank You!!!
      </p>

      <DonateButton />

      <h2>Become a St. Francis Society Guardian Angel (monthly donor)</h2>
      <p>
        Becoming one of our Guardian Angels provides St. Francis Society Animal
        Rescue with a sustainable income we can rely on. Your monthly gift helps
        us to continue providing the animals in our care with essentials such as
        food, medicine, litter, and spay/neuter surgeries.
      </p>

      <h3>Here’s how your monthly donation can help</h3>
      <ul>
        <li>$10 can feed a kitten for a month</li>
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
    </div>
  </StandardLayout>
)

export default Donate
