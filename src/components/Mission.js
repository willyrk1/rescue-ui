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
            St. Francis Society Animal Rescue is an all volunteer, non-profit 501-c-3 animal
            rescue organization dedicated to saving the lives of sick, injured, and stray
            domestic animals as well as spaying/neutering and medical services for those
            animals. We seek to place animals in a loving foster or permanent home after
            recovery and we DO NOT euthanize unless terminal illness necessitates such a
            decision. All of our animals are spayed/neutered, wormed
            and vaccinated before they are adopted.
          </p>

          <h2>Why did we choose St. Francis?</h2>
              
          <p>
            Poorly dressed in rough brown cloth, a little thin man felt compassion for the
            smallest of God's creatures. He brought safety to worms he found in the middle of
            the road by gently picking them up and placing them on the side of the road. St.
            Francis of Assissi chose to live in poverty, while rejoicing in the world's natural
            beauty. Joyfully praising "Brother Sun, Sister Moon, Brother Fire and Sister
            Water" thru his poetry. Even more, he loved living creatures; teaching that all
            should be generous to animals and birds. Throughout his travels, St. Francis spoke
            of God's great love and care for his companion animals. During a long winter
            travel, he brought honey to the bees, exchanged his cloak to a butcher in return
            for two lambs - to save them from slaughter. He urged people to throw out grain for
            the birds, and was seen throwing freshly caught fish back in the water. He was
            loved and followed by many pet animals; lambs, rabbits, and pheasants, among them.
            Today, we celebrate the "Feast of St. Francis" on October 4th. Across the world, a
            Blessing of the Animals is held on this day.
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
