/********************************************************************************
 * Cats component
 *
 * Cats component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';
import AnimalCard from './AnimalCard';
import './Cats.scss';

class Cats extends Component {
    constructor(props) {
        super(props);

        this.state = { data : {}};

    	StFrancisRescue.getCats()
            .then(data => this.loadCats(data))
            .catch(error => console.error(error));
    }

    loadCats(data) {
        this.setState({data : data.data, loaded : true});
    }

    renderCatList(cats) {
        const c = [];
        if (cats) {
            cats.forEach(cat => {
                c.push(<AnimalCard animal={cat} key={`cat-${cat.id}`} />);
            });
        }
        return <div>{c}</div>;
    }

    render() {
        const {adoptionCenterAnimals, fosteredAnimals, specialNeedsAnimals, adoptionCenters} = this.state.data;

        if (this.state.loaded) {
            return (
			    <div id="cats">
                  <h1>Our Cats</h1>
                  <br />
                  { adoptionCenters && adoptionCenters.length > 0 &&
                      <p>Some of our cats ready for adoption can be seen at the following
                            Adoption Centers, which will be listed in their story.
                      </p> }
                      
                      <p>
                        For cats located in foster homes, you can contact the foster
                        directly if you have questions about the cat. Otherwise, click on
                        the "Want to Adopt Me?" button next to a cat, fill out the adoption
                        form and someone will contact you.
                      </p>

                      { specialNeedsAnimals.length > 0 &&
                          <span>
                                <h3>Special Needs Cats</h3>
                                    <div>
                                          {this.renderCatList(specialNeedsAnimals)}
                                        </div>
                          </span>}
                      
                          { adoptionCenterAnimals.length > 0 &&
                              <span>
                                    <h3>Adoption Center Cats</h3>
                                        <div>
                                              {this.renderCatList(adoptionCenterAnimals)}
                                            </div>
                              </span> }
                              
                              { fosteredAnimals.length > 0 &&
                                  <span>
                                        <h3>Fostered Cats</h3>
                                            <div>
                                                  {this.renderCatList(fosteredAnimals)}
                                                </div>
                                  </span> }
                                  
                </div>
		    );
        } else {
            return <div id="cats">Loading...</div>;
        }
    }
}

export default Cats;
