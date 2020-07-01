import React from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import classNames from 'classnames/bind'
import Layout from './Layout'
import donateCat from '../assets/images/donateCat.jpg'
import styles from './HelpOurCause.module.scss'

const cx = classNames.bind(styles)

const HelpOurCause = () => (
  <Layout legal>
    <div className={cx('help-cause')}>
      <div className={cx('first')}>
        <div className={cx('main')}>
          <div className={cx('top')}>
            <img src={donateCat} alt="Help Our Cause" />
            <h1>
              <em>
                Please Help.
                <br /> He's Counting on You.
              </em>
            </h1>
            <p>
              We are a 501(c)3 non-profit organization and receive no government
              funding. We have no paid employees so 100% of every dollar you
              donate goes to the animals.
            </p>
          </div>

          <h1>
            Please Help.
            <br /> He's Counting on You.
          </h1>
          <hr />

          <div className={cx('make-donation')}>
            <div className={cx('one-time')}>
              <p>Make A One-Time Donation</p>
              <Link to="/donate" className={cx('btn')}>
                Donate
              </Link>
            </div>
            <div className={cx('monthly')}>
              <p>Make A Monthly Donation</p>
              <Link to="/donate" className={cx('btn')}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('mail-check')}>
        <p>If you prefer to send a check, please mail to:</p>
        <p>
          St. Francis Society
          <br />
          P.O. Box 261614
          <br />
          Tampa, FL 33685
        </p>
      </div>

      <div className={cx('other')}>
        <h1>Other Ways To Help</h1>
        <hr />
        <div className={cx('panels')}>
          <div className={cx('panel')}>
            <p>Shop Our Wish List</p>
            <a
              className={cx('btn')}
              href="https://amzn.to/2RQwqwk"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Info
            </a>
          </div>
          <div className={cx('panel')}>
            <p>Foster To Save Lives</p>
            <Link to="/volunteer" className={cx('btn')}>
              More Info
            </Link>
          </div>
          <div className={cx('panel')}>
            <p>Use Amazon Smile</p>
            <Popup
              modal
              closeOnDocumentClick
              trigger={<button className={cx('btn')}>More Info</button>}
              contentStyle={{ width: 'inherit' }}
            >
              {close => (
                <div className={cx('popup-modal')}>
                  <button className={cx('close')} onClick={close}>
                    &times;
                  </button>
                  <h2>Amazon Smile</h2>
                  <div className={cx('content')}>
                    <p>
                      AmazonSmile is a website operated by Amazon with the same
                      products, prices and shopping features as Amazon.com. The
                      difference is that, when you shop on AmazonSmile, the
                      AmazonSmile Foundation will donate 0.5% of the purchase
                      price of eligible products to the charitable organization
                      of your choice!
                    </p>
                    <p>
                      Simply visit smile.amazon.com, and select St. Francis
                      Society Animal Rescue as your charity of choice.
                    </p>
                  </div>
                  <div className={cx('actions')}>
                    <a
                      className={cx('btn')}
                      href="https://smile.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Smile
                    </a>
                    <button className={cx('btn')} onClick={close}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className={cx('panel')}>
            <p>Sponsor A Forever Foster</p>
            <Link className={cx('btn')} to="/forever-foster">
              More Info
            </Link>
          </div>
          <div className={cx('panel')}>
            <p>Company-Matched Donations</p>
            <Popup
              modal
              closeOnDocumentClick
              trigger={<button className={cx('btn')}>More Info</button>}
              contentStyle={{ width: 'inherit' }}
            >
              {close => (
                <div className={cx('popup-modal')}>
                  <button className={cx('close')} onClick={close}>
                    &times;
                  </button>
                  <h2>Company-Matched Donations</h2>
                  <div className={cx('content')}>
                    <p>
                      You may be able to double, or even triple, your donation!
                      Many employers offer matching gift programs and will match
                      charitable contributions or volunteer hours donated by
                      their employees. To find out if your company offers
                      matching gifts, please check with your employer's Human
                      Resources department. You may also click below to see a
                      comprehensive list of participating employers.
                    </p>
                  </div>
                  <div className={cx('actions')}>
                    <a
                      className={cx('btn')}
                      href="https://ww2.matchinggifts.com/search/unh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View List
                    </a>
                    <button className={cx('btn')} onClick={close}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className={cx('panel')}>
            <p>Planned Giving</p>
            <Popup
              modal
              closeOnDocumentClick
              trigger={<button className={cx('btn')}>More Info</button>}
              contentStyle={{ width: 'inherit' }}
            >
              {close => (
                <div className={cx('popup-modal')}>
                  <button className={cx('close')} onClick={close}>
                    &times;
                  </button>
                  <h2>Planned Giving</h2>
                  <div className={cx('content')}>
                    <p>
                      When you make a bequest to St. Francis Society, you are
                      leaving a legacy of love and compassion unlike any other.
                      A bequest is a gift made through your will or trust, and
                      enables us to continue our life-saving mission for years
                      to come. If you are interested in learning more about
                      leaving a bequest to St. Franics Society, please contact
                      us at&nbsp;
                      <a href="mailto:stfrancissociety@gmail.com">
                        stfrancissociety@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                  <div className={cx('actions')}>
                    <button className={cx('btn')} onClick={close}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default HelpOurCause
