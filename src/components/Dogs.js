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
    }

    componentDidMount() {
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
                  <h3>Adoption Center Dogs</h3>
                  {this.renderDogList(adoptionCenterAnimals)}
                  
                  <h3>Fostered Dogs</h3>
                  {this.renderDogList(fosteredAnimals)}
                  
                </div>
		    );
        } else {
            return <div id="dogs">Loading...</div>;
        }
	}
}

export default Dogs;
