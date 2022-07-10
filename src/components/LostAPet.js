import React from 'react'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import lostAPetImage from '../assets/images/LostAPet.png'
import styles from './LostAPet.module.scss'

const cx = classNames.bind(styles)

const LostAPet = () => (
  <StandardLayout>
    <div className={cx('lost-a-pet')}>
      <a href='http://lost.petcolove.org'>
        <img src={lostAPetImage} alt="Lost A Pet?" className={cx('banner')} />
      </a>
      <h1>Is Your Pet Lost?</h1>
      <hr />
      <p className={cx('lead')}>
        <em>
          A lost pet can be a frightening experience for any pet parent.
          Immediate action is crucial, but where do you start? Follow the steps
          below for the best chance of a reunion.
        </em>
      </p>
      <h2>What to do immediately after your pet goes missing:</h2>
      <p>
        <strong>Walk the neighborhood:</strong> Take a walk around the immediate
        area and speak
        to any neighbors, postal service workers, landscapers, or anyone who may
        have seen your lost pet. You know your pet best, so look in areas that
        your pet may have been interested in or comfortable hiding in. Most pets
        are found close to home.
      </p>
      <p>
        <strong>Share their scent:</strong> Put a couple of your pet's favorite
        items near the most common entry ways into your home. The front door and
        the door into your yard would be the best locations. You can include
        items like their favorite bed, blanket, toys, their litterbox (if cat)
        and any other items they use frequently. Their scents may help them find
        their way home.
      </p>
      <h2>Next Steps:</h2>
      <ol>
        <li>
          <p>
            <strong>Search for your lost dog or cat on Petco Love
            Lost:</strong> We have partnered with Petco Love Lost to easily
            help search the
            national lost and found database and create a searchable/shareable
            alert for your missing pet. Upload a picture of your pet or searching
            by location. Powered by facial recognition technology, Petco Love
            Lost helps match found animals to reported lost pets nationwide.
            Visit <a href='http://lost.petcolove.org'>Petco Love Lost</a> and
            search now!
          </p>
          <p>
            If you haven't done so already, be sure to register your pet on
            Petco Love Lost to do things like create a Lost listing that can
            be shared and print out premade fliers. You can also receive
            fliers via text message or email.
          </p>
        </li>
        <li>
          <p>
            <strong>Use the sharing features on Petco Love Lost to distribute
            your lost pet listing on other social media outlets like Facebook,
            Craigslist, and Nextdoor.</strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Make sure your pet's microchip information is updated:
            </strong> If a finder takes your missing pet to be scanned for
            a microchip, you want to make sure that all the information is
            correct so that you will be contacted immediately.
          </p>
        </li>
        <li>
          <p>
            <strong>Check with your local animal services, animal control,
            and animal shelters:</strong> Call to see if your missing pet is
            at one of these locations. An in-person trip is preferable so you
            can look and see if your pet is in their care. Many organizations
            allow you to place a lost report with them, where you can leave a
            photo of your pet and your contact information.
          </p>
          <div className={cx('indent')}>
            <p>
              <a href='https://www.hillsboroughcounty.org/en/residents/animals-and-pets/lost-and-found-pets'>
                <strong>Hillsborough County Pet Resource Center</strong>
              </a>
            </p>
            <p>
              <a href='https://humanesocietytampa.org/service/lost-found-pets/'>
                <strong>Humane Society of Tampa Bay</strong>
              </a>
            </p>
          </div>
        </li>
        <li>
          <p>
            <strong>Continue to spread the word about your missing
            pet:</strong> Make sure any posters or fliers made are large
            and bright with only
            relevant information on it. Place in high traffic areas and in the
            vicinity of where your lost pet went missing.
          </p>
        </li>
        <li>
          <p>
            <strong>Don't give up!</strong> Finding a lost pet can take time.
            Remember to regularly check websites that you have posted your
            lost pet on and make updates as needed. New lost and found pets
            are added regularly to Petco Love Lost and to your local shelters.
          </p>
        </li>
      </ol>
    </div>
  </StandardLayout>
)

export default LostAPet
