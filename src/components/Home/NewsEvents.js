import React from 'react'
import classNames from 'classnames/bind'
import styles from './NewsEvents.module.scss';

const cx = classNames.bind(styles)

const NewsEvents = () =>
  <div className={cx('home-news-events')}>
    <h1>News &amp; Events</h1>
    <hr/>
    <div className={cx('panels')}>
      <div className={cx('panel')}>
        <div className={cx('date')}><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <a className={cx('btn2')} href='#'>More Info</a>
      </div>
      <div className={cx('panel')}>
        <div className={cx('date')}><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <a className={cx('btn2')} href='#'>More Info</a>
      </div>
      <div className={cx('panel')}>
        <div className={cx('date')}><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <a className={cx('btn2')} href='#'>More Info</a>
      </div>
    </div>
    <div>
        <a className={cx('btn2', 'btn--secondary')} href='#'>View All</a>
    </div>
  </div>

export default NewsEvents