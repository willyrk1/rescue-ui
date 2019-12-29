import React from 'react';
import Popup from "reactjs-popup"
import classNames from 'classnames/bind'
import Layout from './Layout'
import donateCat from '../assets/images/donateCat.jpg'
import makeDonationCat from '../assets/images/kitty.png'
import styles from './Donate.module.scss';

const cx = classNames.bind(styles)

const Donate = () => {
  return (
    <Layout legal>
      <div className={cx('donate')}>
        <div className={cx('first')}>
          <div className={cx('main')}>
            <div className={cx('top')}>
              <img src={donateCat}/>
              <h1>
                <em>Please Help.<br/> He's Counting on You.</em>
              </h1>
              <p>
                We are a 501(c)3 non-profit organization and receive no government funding.
                We have no paid employees so 100% of every dollar you donate goes to the animals.
              </p>
            </div>

            <div className={cx('make-donation')}>
              <div>
                <img src={makeDonationCat} />
                <div className={cx('one-time')}>
                  <p>Make A One-Time Donation</p>
                  <div className={cx("btn-container")}>
                    <a className={cx("btn btn--accent")} href="#">DONATE</a>
                  </div>
                </div>
              </div>
              <div>
                <img src={makeDonationCat} />
                <div className={cx('monthly')}>
                  <p>Make A Monthly Donation</p>
                  <div className={cx("btn-container")}>
                    <a className={cx("btn btn--accent")} href="#">DONATE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('mail-check')}>
          <p>
            If you prefer to send a check, please mail to: St. Francis Society, P.O. Box 261614, Tampa, FL 33685.
          </p>
        </div>

        <div className={cx('other')}>
          <h1>Other Ways To Help</h1>
          <hr/>
          <div className={cx('panels')}>
            <div className={cx('panel')}>
              <p>
                Shop Our Wish List
              </p>
              <div className={cx("btn-container")}>
                <a
                  className={cx("btn btn--accent")}
                  href='https://amzn.to/2RQwqwk'
                  target='_blank'
                >
                  More Info
                </a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Foster To Save Lives
              </p>
              <div className={cx("btn-container")}>
                <a className={cx("btn btn--accent")} href="#">More Info</a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Use Amazon Smile
              </p>
              <Popup
                modal
                closeOnDocumentClick
                trigger={
                  <div className={cx("btn-container")}>
                    <a
                      className={cx("btn btn--accent")}
                      href="#"
                      onClick={event => { event.preventDefault(); }}
                    >
                      More Info
                    </a>
                  </div>
                }
              >
                {close =>
                  <div className={cx('popup-modal')}>
                    <a className={cx('close')} onClick={close}>
                      &times;
                    </a>
                    <h2>Amazon Smile</h2>
                    <div className={cx('content')}>
                      <p>
                        AmazonSmile is a website operated by Amazon with the same products, prices and
                        shopping features as Amazon.com. The difference is that, when you shop on AmazonSmile,
                        the AmazonSmile Foundation will donate 0.5% of the purchase price of eligible products
                        to the charitable organization of your choice!
                      </p>
                      <p>
                        Simply visit smile.amazon.com, and select St. Francis Society Animal Rescue as your
                        charity of choice.
                      </p>
                    </div>
                    <div className={cx('actions')}>
                      <div className={cx("btn-container")}>
                        <a
                          className={cx("btn btn--accent")}
                          href="https://smile.amazon.com"
                          target='_blank'
                        >
                          Go to Smile
                        </a>
                      </div>
                      <div className={cx("btn-container")}>
                        <a
                          className={cx("btn btn--accent")}
                          href="#"
                          onClick={event => { close(); event.preventDefault(); }}
                        >
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                }
              </Popup>
            </div>
            <div className={cx('panel')}>
              <p>
                Create A Facebook Fundraiser
              </p>
              <div className={cx("btn-container")}>
                <a
                  className={cx("btn btn--accent")}
                  href='https://www.facebook.com/fund/StFrancisSocietyAnimalRescue/'
                  target='_blank'
                >
                  More Info
                </a>
              </div>
            </div>
            <div className={cx('panel')}>
              <p>
                Company-Matched Donations
              </p>
              <Popup
                modal
                closeOnDocumentClick
                trigger={
                  <div className={cx("btn-container")}>
                    <a
                      className={cx("btn btn--accent")}
                      href="#"
                      onClick={event => { event.preventDefault(); }}
                    >
                      More Info
                    </a>
                  </div>
                }
              >
                {close =>
                  <div className={cx('popup-modal')}>
                    <a className={cx('close')} onClick={close}>
                      &times;
                    </a>
                    <h2>Company-Matched Donations</h2>
                    <div className={cx('content')}>
                      <p>
                        You may be able to double, or even triple, your donation!  Many employers
                        offer matching gift programs and will match charitable contributions or
                        volunteer hours donated by their employees. To find out if your
                        company offers matching gifts, please check with your employer's Human
                        Resources department.  You may also click below to see a comprehensive list
                        of participating employers.
                      </p>
                    </div>
                    <div className={cx('actions')}>
                      <div className={cx("btn-container")}>
                        <a
                          className={cx("btn btn--accent")}
                          href="https://ww2.matchinggifts.com/search/unh"
                          target='_blank'
                        >
                          View List
                        </a>
                      </div>
                      <div className={cx("btn-container")}>
                        <a
                          className={cx("btn btn--accent")}
                          href="#"
                          onClick={event => { close(); event.preventDefault(); }}
                        >
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                }
              </Popup>
            </div>
            <div className={cx('panel')}>
              <p>
                Planned Giving
              </p>
              <Popup
                modal
                closeOnDocumentClick
                trigger={
                  <div className={cx("btn-container")}>
                    <a
                      className={cx("btn btn--accent")}
                      href="#"
                      onClick={event => { event.preventDefault(); }}
                    >
                      More Info
                    </a>
                  </div>
                }
              >
                {close =>
                  <div className={cx('popup-modal')}>
                    <a className={cx('close')} onClick={close}>
                      &times;
                    </a>
                    <h2>Planned Giving</h2>
                    <div className={cx('content')}>
                      <p>
                        When you make a bequest to St. Francis Society, you are leaving a legacy of
                        love and compassion unlike any other.  A bequest is a gift made through
                        your will or trust, and enables us to continue our life-saving mission for
                        years to come.  If you are interested in learning more about leaving a
                        bequest to St. Franics Society, please contact us at&nbsp;
                        <a href='mailto:stfrancissociety@gmail.com'>stfrancissociety@gmail.com</a>.
                      </p>
                    </div>
                    <div className={cx('actions')}>
                      <div className={cx("btn-container")}>
                        <a
                          className={cx("btn btn--accent")}
                          href="#"
                          onClick={event => { close(); event.preventDefault(); }}
                        >
                          Close
                        </a>
                      </div>
                    </div>
                  </div>
                }
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donate;
