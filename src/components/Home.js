/********************************************************************************
 * Homes component
 *
 * Homes component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { data : {}};
    }

    componentDidMount() {
		StFrancisRescue.getHome()
            .then(data => this.loadHome(data))
            .catch(error => console.error(error));

    }

    loadHome(data) {
        this.setState({data : data.data, loaded: true});
    }

    render() {
        const {page} = this.state.data;

        if (this.state.loaded) {
            const content = page.content.replace(/\/uploads/g, `${PROTOCOL}://${HOSTNAME}/uploads`);
            return (
			    <div id="home">
                  <span dangerouslySetInnerHTML={{__html:  content }} />
                </div>
		    );
        } else {
            return <div id="home">Loading...</div>;
        }
	}
}

export default Home;
