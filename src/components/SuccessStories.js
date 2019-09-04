/********************************************************************************
 * SuccessStories component
 *
 * SuccessStories component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';

class SuccessStories extends Component {
    constructor(props) {
        super(props);

        this.state = { data : {}};

    	StFrancisRescue.getSuccessStories()
            .then(data => this.loadSuccessStories(data))
            .catch(error => console.error(error));
    }

    loadSuccessStories(data) {
        this.setState({data : data.data, loaded: true});
    }

    render() {
        const {adoptedAnimals} = this.state.data;

        if (this.state.loaded) {
            return (
                <div id="success-stories">
                  <h3>Recent animals that found a Fur-ever Home...</h3>
                  <br/>
                  <div style={{textAlign: "justify"}}>
                    <ul style={{padding: 0}}>
                      {adoptedAnimals.map((animal, index) => {
                          return <li key={index}><img src={animal.primary_image_thumbnail.replace(/\/uploads/g, `${PROTOCOL}://${HOSTNAME}/uploads`)} alt="" title={animal.name}></img></li>;
                      })}
                    </ul>
                  </div>
                </div>
		    );
        } else {
            return <div id="successStories">Loading...</div>;
        }
	}
}

export default SuccessStories;
