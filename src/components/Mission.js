/********************************************************************************
 * Missions component
 *
 * Missions component for the Rescue UI.
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import StandardLayout from './StandardLayout'
import DonationExamples from './DonationExamples'
import { PROTOCOL, HOSTNAME } from '../config/StFrancisRescue'
import donationStyles from './Home/DonateRibbon.module.scss'
import styles from './Mission.module.scss'

const cx = classNames.bind(styles)

const Mission = () => {
  const [boardMembers, setBoardMembers] = useState()

  useEffect(() => {
    const loadBoardMembers = async () => {
      const { data } = await StFrancisRescue.getBoardMembers()
      setBoardMembers(data)
    }
    loadBoardMembers()
  }, [])

  return (
    <StandardLayout>
      <div className={cx('mission')}>
        <div className={cx('main')}>
          <h1>Our Mission</h1>
          <hr />
          <p>
            Established in 1997, St. Francis Society Animal Rescue is an all
            volunteer, non-profit 501-c-3 animal rescue organization dedicated
            to saving the lives of sick, injured, and stray domestic animals as
            well as spaying/neutering and medical services for those animals. We
            seek to place animals in a loving foster or permanent home after
            recovery and we DO NOT euthanize unless terminal illness
            necessitates such a decision. All of our animals are
            spayed/neutered, wormed and vaccinated before they are adopted.
          </p>
          <p>
            Each year, St. Francis Society helps find homes for over 2,000
            animals. Nearly half of those are saved from euthanasia at local
            animal shelters, and the others are rescued from the community.
            Additionally, each year, we trap/neuter/vaccinate and return
            hundreds of feral cats in the Tampa community. This is the only
            proven humane and effective method to manage community cat colonies
            and prevent thousands of unwanted kittens from being born.
          </p>
        </div>

        <DonationExamples styles={donationStyles} />

        {boardMembers && (
          <>
            <div className={cx('board-header')}>
              <h2>Meet our board of Directors</h2>
              <hr />
            </div>

            {[
              'presidents',
              'vicePresidents',
              'treasurers',
              'secreteries',
              'directors',
              'adminStaff',
            ].map(boardType =>
              boardMembers[boardType].map(
                ({
                  picture,
                  volunteer: { name },
                  board_member_title: { name: title },
                  role,
                  bio,
                }) => (
                  <div className={cx('board-member')}>
                    <div className={cx('side')}>
                      <img
                        src={
                          picture
                            ? `${PROTOCOL}://${HOSTNAME}${picture}`
                            : '/no_picture.jpg'
                        }
                        alt={name.split(' ')[0]}
                      />
                    </div>
                    <div className={cx('member-info')}>
                      <h3>
                        {name.split(' ')[0]}-{title}
                      </h3>
                      <h4>{role}</h4>
                      <p dangerouslySetInnerHTML={{ __html: bio }} />
                    </div>
                  </div>
                )
              )
            )}
          </>
        )}
      </div>
    </StandardLayout>
  )
}

export default Mission
