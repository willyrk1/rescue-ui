/********************************************************************************
 * Missions component
 *
 * Missions component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue';
import Layout from './Layout'
import DonationExamples from './DonationExamples'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import dogCat from '../assets/images/dog-cat.png'
import styles from './Mission.module.scss';

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
    <Layout>
      <div className={cx('mission-row', 'top')}>
        <div className={cx('side')}>
          <img src={dogCat}/>
          <DonationExamples styles={styles} />
        </div>
        <div className={cx('main')}>
          <h1>Our Mission</h1>
          <p>
            Established in 1997, St. Francis Society Animal Rescue is an all volunteer, non-profit 501-c-3 animal
            rescue organization dedicated to saving the lives of sick, injured, and stray
            domestic animals as well as spaying/neutering and medical services for those
            animals. We seek to place animals in a loving foster or permanent home after
            recovery and we DO NOT euthanize unless terminal illness necessitates such a
            decision. All of our animals are spayed/neutered, wormed
            and vaccinated before they are adopted.
          </p>
        </div>
      </div>

      <div className={cx('mission-row')}>
        <div className={cx('side')}>
        </div>
        <div className={cx('main')}>
          <h2>Meet our board of Directors</h2>
        </div>
      </div>
      {boardMembers && [
        'presidents',
        'vicePresidents',
        'treasurers',
        'secreteries',
        'directors',
        'adminStaff'
      ].map(boardType => boardMembers[boardType].map(({
        picture, volunteer: { name }, board_member_title: { name: title }, role, bio
      }) =>
        <div className={cx('mission-row', 'board-member')}>
          <div className={cx('side')}>
            <img
              src={picture
                ? `${PROTOCOL}://${HOSTNAME}${picture}`
                : '/no_picture.jpg'
              }
            />
          </div>
          <div className={cx('main')}>
            <h3>{name.split(' ')[0]}-{title}</h3>
            <h4>{role}</h4>
            <p dangerouslySetInnerHTML={{__html: bio }} />
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Mission;
