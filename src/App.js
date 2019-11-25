/********************************************************************************
 * App component
 *
 * Core application component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
    
    render() {
        return (
            <Router>
              <div className="App">
		        <Header />
		        <Content />
		        <Footer />
              </div>
            </Router>
        );
    }
}

export default App;
