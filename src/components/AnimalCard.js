/********************************************************************************
 * AnimalCard component
 *
 * AnimalCard component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import './AnimalCard.scss';

class AnimalCard extends Component {
    render() {
        const {animal} = this.props;
        
        return (
			<div className="AnimalCard" id="animalCard" key={`animalCard-${animal.id}`}>
              <div className="left_half">
                <img height="200" alt="" src={`${PROTOCOL}://${HOSTNAME}${animal.primary_image.public_filename}`}/>

                <table className="profile">
                  <tbody>
                  <tr>
                    <th>Date of Birth:</th>
                    <td>{animal.date_of_birth}</td>
                  </tr>
                  <tr>
                    <th>Sex:</th>
                    <td>{ animal.sex }</td>
                  </tr>
                  <tr>
                    <th>Color:</th>
                    <td>{ animal.animal_color.name }</td>
                  </tr>
                  <tr>
                    <th>Breed:</th>
                    <td>{ animal.dominant_breed.name }
                      { animal.purebreed && <span>(purebreed)</span> }
                      { animal.secondary_breed && <span>(Mix)</span> }
		            </td>
                  </tr>      
                  { animal.animal_type === "Dog" &&
                      <tr>
                            <th>Weight:</th>
                            <td>{ animal.weight } lbs</td>
                      </tr>
                  }
                  { (animal.animal_type === "Cat") && (animal.declawed !== "No") &&
                      <tr>
                            <th>Declawed:</th>
                            <td>{ animal.declawed }</td>
                      </tr> 
                  }
                  <tr>
                    <th>Fur:</th>
                    <td>{ animal.fur_length }</td>
                  </tr>
                  </tbody>
                </table>
  	          </div>
              
              <div className="right_half">
                <ul className="brief">
                  <li>
		            { animal.special_need_id &&
                        <p><strong>Special Need: </strong>
                              { animal.special_need.reference ? (
                                  <a href={ animal.special_need.reference }>{ animal.special_need.name }</a>
                              ) : (
                                  <span>{animal.special_need.name}</span> 
                              )
                              }
                      </p>
                    }
                <p style={{marginTop: '5px'}}><strong>My story:</strong> { animal.story }</p>
                { animal.must_adopt_with && 
                  <p><strong>Must be adopted with:</strong> { animal.must_adopt_with }</p>
                }
                <p>
                <strong>Good with Cats:</strong> { animal.good_with_cats }&nbsp;&nbsp;|&nbsp;&nbsp;  
                <strong>Good with Dogs:</strong> { animal.good_with_dogs }&nbsp;&nbsp;|&nbsp;&nbsp;  
                <strong>Good with Children:</strong> { animal.good_with_children }
            </p>
                { animal.youtube_url && 
                  <p style={{fontSize: '1.50em'}}><b><i>Check out my video on</i></b> &nbsp; <a alt="YouTube" title="YouTube" style={{align:  "bottom"}} href={animal.youtube_url} target="_blank" rel="noopener noreferrer"><img src="/YouTube_Icon.png" alt="[YouTube]"/></a>!!!</p>
                }
            </li>
                </ul>
                </div>
                </div>
		);
	}
}

export default AnimalCard;
