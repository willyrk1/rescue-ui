import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import { getAge } from '../config/helpers';
import styles from './AnimalCard.module.scss'

const cx = classNames.bind(styles)

const DetailLink = ({ pet, children }) =>
  <Link
    to={{ pathname: './pet-details', state: { pet }}}
    className={cx('details-link')}
  >
    {children}
  </Link>

const AnimalCard = ({ pet }) =>
  <div className={cx('animal-card')}>
    <div className={cx('pet-card')}>
      <DetailLink pet={pet}>
        <img src={`${PROTOCOL}://${HOSTNAME}${pet.primary_image_thumbnail}`} alt={pet.name} />
      </DetailLink>
      <div className={cx('description')}>
        <h3>{pet.name}</h3>
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
            <span id='dob'>{getAge(pet.date_of_birth)}</span>
          </li>
        </ul>
        <DetailLink pet={pet}>Read My Profile</DetailLink>
      </div>
    </div>  








    {/* <div className='left_half'>
      <img height='200' alt='' src={`${PROTOCOL}://${HOSTNAME}${pet.primary_image_thumbnail}`}/>

      <table className='profile'>
        <tbody>
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
