import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

const DonationExamples = ({ styles, more }) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('donation-examples')}>
      <div>
        <div className={cx('money')}>$10</div>
        <div className={cx('caption')}>
          Feed a kitten
          <br /> for a week.
        </div>
      </div>
      <hr />
      <div>
        <div className={cx('money')}>$25</div>
        <div className={cx('caption')}>
          Vaccinate one
          <br /> animal.
        </div>
      </div>
      <hr />
      <div>
        <div className={cx('money')}>$100</div>
        <div className={cx('caption')}>
          For life-saving
          <br /> medicine.
        </div>
      </div>
      {more && (
        <>
          <hr />
          <div>
            <div className={cx('money')}>$500</div>
            <div className={cx('caption')}>
              Provide <br />
              emergency
              <br /> surgery.
            </div>
          </div>
        </>
      )}
      <div>
        <Link to="/donate" className={cx('btn')}>
          DONATE
        </Link>
      </div>
    </div>
  )
}

export default DonationExamples
