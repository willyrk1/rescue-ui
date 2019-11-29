import React from 'react'
import './NewsEvents.scss';

const NewsEvents = () => (
  <div className='home-news-events'>
    <h1>News &amp; Events</h1>
    <hr/>
    <div className='panels'>
      <div>
        <div className='date'><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <div className="btn-container">
          <a className="btn btn--accent" href="#">More Info</a>
        </div>
      </div>
      <div>
        <div className='date'><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <div className="btn-container">
          <a className="btn btn--accent" href="#">More Info</a>
        </div>
      </div>
      <div>
        <div className='date'><p>29</p></div>
        <h1>Title of Event</h1>
        <h2>07-29-19 | 4:00 pm</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mi id imperdiet rutrum, urna ante faucibus ex.
        </p>
        <div className="btn-container">
          <a className="btn btn--accent" href="#">More Info</a>
        </div>
      </div>
    </div>
    <div>
      <div className="btn-container">
        <a className="btn btn--secondary" href="#">View All</a>
      </div>
    </div>
  </div>
)

export default NewsEvents