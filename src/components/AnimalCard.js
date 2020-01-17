/********************************************************************************
 * AnimalCard component
 *
 * AnimalCard component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import classNames from 'classnames/bind'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import styles from './AnimalCard.module.scss'

const cx = classNames.bind(styles)

const AnimalCard = ({ pet }) =>
  <div className={cx('animal-card')}>
    <div className={cx('pet-card')}>
      <div className={cx('pet-image')}>
        <h3>{pet.name}</h3>
        <img src={`${PROTOCOL}://${HOSTNAME}${
          pet.images.find(({ primary }) => primary).public_filename
        }`} />
      </div>
      <div className={cx('pet-info')}>
        <ul>
          <li>
            <label htmlFor='breed'>Breed</label>
            <span id='breed'>{pet.dominant_breed.name}</span>
          </li>
          <li>
            <label htmlFor='gender'>Gender</label>
            <span id='gender'>{pet.sex}</span>
          </li>
          <li>
            <label htmlFor='color'>Color</label>
            <span id='color'>{pet.animal_color.name}</span>
          </li>
          <li>
            <label htmlFor='dob'>Date of birth</label>
            <span id='dob'>{pet.date_of_birth}</span>
          </li>
          <li>
            <label htmlFor='goodWithCats'>Good with cats</label>
            <span id='goodWithCats'>{pet.good_with_cats}</span>
          </li>
          <li>
            <label htmlFor='goodWithDogs'>Good with dogs</label>
            <span id='goodWithDogs'>{pet.good_with_dogs}</span>
          </li>
          <li>
            <label htmlFor='goodWithChildren'>Good with children</label>
            <span id='goodWithChildren'>{pet.good_with_children}</span>
          </li>
        </ul>
      </div>
    </div>  

    <p><strong>{pet.story}</strong></p>








    {/* <div className='left_half'>
      <img height='200' alt='' src={`${PROTOCOL}://${HOSTNAME}${pet.primary_image_thumbnail}`}/>

      <table className='profile'>
        <tbody>
        <tr>
          <th>Date of Birth:</th>
          <td>{pet.date_of_birth}</td>
        </tr>
        <tr>
          <th>Sex:</th>
          <td>{ pet.sex }</td>
        </tr>
        <tr>
          <th>Color:</th>
          <td>{ pet.animal_color.name }</td>
        </tr>
        <tr>
          <th>Breed:</th>
          <td>{ pet.dominant_breed.name }
            { pet.purebreed && <span>(purebreed)</span> }
            { pet.secondary_breed && <span>(Mix)</span> }
      </td>
        </tr>      
        { pet.animal_type === 'Dog' &&
            <tr>
                  <th>Weight:</th>
                  <td>{ pet.weight } lbs</td>
            </tr>
        }
        { (pet.animal_type === 'Cat') && (pet.declawed !== 'No') &&
            <tr>
                  <th>Declawed:</th>
                  <td>{ pet.declawed }</td>
            </tr> 
        }
        <tr>
          <th>Fur:</th>
          <td>{ pet.fur_length }</td>
        </tr>
        </tbody>
      </table>
    </div>
    
    <div className='right_half'>
      <ul className='brief'>
        <li>
      { pet.special_need_id &&
              <p><strong>Special Need: </strong>
                    { pet.special_need.reference ? (
                        <a href={ pet.special_need.reference }>{ pet.special_need.name }</a>
                    ) : (
                        <span>{pet.special_need.name}</span> 
                    )
                    }
            </p>
          }
      <p style={{marginTop: '5px'}}><strong>My story:</strong> { pet.story }</p>
      { pet.must_adopt_with && 
        <p><strong>Must be adopted with:</strong> { pet.must_adopt_with }</p>
      }
      <p>
      <strong>Good with Cats:</strong> { pet.good_with_cats }&nbsp;&nbsp;|&nbsp;&nbsp;  
      <strong>Good with Dogs:</strong> { pet.good_with_dogs }&nbsp;&nbsp;|&nbsp;&nbsp;  
      <strong>Good with Children:</strong> { pet.good_with_children }
  </p>
      { pet.youtube_url && 
        <p style={{fontSize: '1.50em'}}><b><i>Check out my video on</i></b> &nbsp; <a alt='YouTube' title='YouTube' style={{align:  'bottom'}} href={pet.youtube_url} target='_blank' rel='noopener noreferrer'><img src='/YouTube_Icon.png' alt='[YouTube]'/></a>!!!</p>
      }
  </li>
      </ul>
      </div> */}
      </div>

export default AnimalCard
