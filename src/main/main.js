import React, { Component } from 'react';
import Home from './home';
import Header from '../layout/header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
	render() {
	  return(
        <div>
          <Header />
		  <Home />
        </div>	  
	  );
	}
}

export default Main;