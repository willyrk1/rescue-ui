/********************************************************************************
 * Dogs component
 *
 * Dogs component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';
import AnimalCard from './AnimalCard';
import './Dogs.scss';

class Dogs extends Component {
    constructor(props) {
        super(props);

        this.state = { data : {}};

    	StFrancisRescue.getDogs()
            .then(data => this.loadDogs(data))
            .catch(error => console.error(error));
    }

    loadDogs(data) {
        this.setState({data : data.data, loaded: true});
    }

    renderDogList(dogs) {
        const c = [];
        if (dogs) {
            dogs.forEach(dog => {
                c.push(<AnimalCard animal={dog} key={`dog-${dog.id}`} />);
            });
        }
        return <div>{c}</div>;
    }

    render() {
        const {adoptionCenterAnimals, fosteredAnimals} = this.state.data;

        if (this.state.loaded) {
            return (
			    <div id="dogs">

                  <p>Since all of our dogs live in foster homes and it is up to the
                    foster family to transport for adoption events, we can not ensure
                    that all dogs will be present. If you are interested in seeing a
                    specific dog, please contact the person listed by phone or email to
                    arrange a visit with the dog.<br />
                  </p>
                  
                  { adoptionCenterAnimals.length > 0 &&
                      <span>
                            <h3>Adoption Center Dogs</h3>
                                {this.renderDogList(adoptionCenterAnimals)}
                      </span> }
                      
                      { fosteredAnimals.length > 0 &&
                          <span>
                                <h3>Fostered Dogs</h3>
                                    {this.renderDogList(fosteredAnimals)}
                          </span> }
                </div>
		    );
        } else {
            return <div id="dogs">Loading...</div>;
        }
	}
}

export default Dogs;
