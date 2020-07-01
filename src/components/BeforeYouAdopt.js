import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import styles from './BeforeYouAdopt.module.scss'

const cx = classNames.bind(styles)

const BeforeYouAdopt = () => (
  <StandardLayout>
    <div className={cx('before-you-adopt')}>
      <h1>Things to Consider Before You Adopt</h1>
      <hr />
      <p>
        Before you make the final decision to adopt, please take the time to
        consider the following questions:
      </p>

      <h2>Why do you want a pet?</h2>
      <p>
        Ask yourself this question before you decide to adopt a pet. There are
        many reasons why you might want a pet; however, remember that the pet
        may be with you for 10, 15 or even 20 years. Please be sure that you are
        willing to commit to caring for a pet for the long term.
      </p>

      <h2>Will you be a responsible pet owner?</h2>
      <p>
        Obey community leash and licensing laws, id tags, give your pet love,
        companionship, exercise, a healthy diet and regular veterinary care. All
        of these things make a responsible pet owner.
      </p>

      <h2>Is it a good time for you to adopt a pet?</h2>
      <p>
        If you are a student, in the military, or travel frequently, consider
        waiting until you settle down before adopting. If you have small
        children under the age of eight, you may want to wait. Children should
        be mature enough to be responsible pet companions.
      </p>

      <h2>Who will care for your pet when you go on vacation?</h2>
      <p>
        You will need friends or neighbors reliable enough that you can trust to
        care for the pet in your absense. Else, you will need money to pay for a
        pet sitting service or boarding.
      </p>

      <h2>Do you have the time to devote to a pet?</h2>
      <p>
        Your pets cannot be ignored just because you are tired or busy. They
        require food, water, exercise, love and companionship every day.
      </p>

      <h2>Can you afford a pet?</h2>
      <p>
        The costs of pet ownership can be quite high. Expenses for all the
        things the pet will need can add up quickly. If you are already
        struggling to make ends meet, you probably should not consider adopting
        a pet.
      </p>

      <h2>Can you deal with the special problems a pet can cause?</h2>
      <p>
        Some unfortunate, but common aspects of pet ownership include flea
        infestations, scratched furniture and unexpected medical emergencies.
      </p>

      <h2>Are you allowed to have a pet where you live?</h2>
      <p>
        Most especially, if you live in an apartment, there may be restrictions
        regarding pets. Please make it your business to know what these are
        before adopting a pet. If you cannot afford a pet deposit or the lease
        specifically says "No Pets", don't adopt.
      </p>

      <h2>Are your living arrangements suitable for the pet?</h2>
      <p>
        Choose an animal that will be comfortable in your surroundings. For
        instance, if you live in an apartment, don't adopt a large dog. Dogs are
        generally more comfortable in homes that have a fenced yard in which
        they can have the freedom to get the exercise they need.
      </p>

      <h2>Are you prepared to care for the pet for his or her entire life?</h2>
      <p>
        When you adopt a pet, you are making a committment to care for the
        animal for his or her entire lifetime.
      </p>
    </div>
  </StandardLayout>
)

export default BeforeYouAdopt
