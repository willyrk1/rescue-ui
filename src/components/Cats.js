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
    }

    componentDidMount() {
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
        const {adoptionCenterAnimals, fosteredAnimals, specialNeedsAnimals} = this.state.data;

        if (this.state.loaded) {
            return (
			    <div id="cats">
                  <h3>Special Needs Cats</h3>
                  <div>
                    {this.renderCatList(specialNeedsAnimals)}
                  </div>
                  
                  <h3>Adoption Center Cats</h3>
                  <div>
                    {this.renderCatList(adoptionCenterAnimals)}
                  </div>
                  
                  <h3>Fostered Cats</h3>
                  <div>
                    {this.renderCatList(fosteredAnimals)}
                  </div>
                  
                </div>
		    );
        } else {
            return <div id="cats">Loading...</div>;
        }
    }
}

export default Cats;
