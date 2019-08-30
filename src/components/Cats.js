/********************************************************************************
 * Cats component
 *
 * Cats component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';

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
        this.setState({data : data.data});
    }

    renderCatList(cats) {
        const c = [];
        if (cats) {
            cats.forEach(cat => {
                c.push(<div className="cat">
                       <p>Name: {cat.name}</p>
                       </div>);
            });
        }
        return <div className="cats">{c}</div>;
    }

    render() {
        const {adoptionCenterAnimals, fosteredAnimals, specialNeedsAnimals} = this.state.data;
        
        return (
			<div className="Cats" id="cats">
                <p>Generic Cat Page</p>

                <h3>Special Needs Cats</h3>
                {this.renderCatList(specialNeedsAnimals)}
            
                <h3>Adoption Center Cats</h3>
                {this.renderCatList(adoptionCenterAnimals)}

                <h3>Fostered Cats</h3>
                {this.renderCatList(fosteredAnimals)}

            </div>
		);
	}
}

export default Cats;
