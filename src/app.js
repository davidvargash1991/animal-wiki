import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main/main';
import './css/bootstrap.css';

class App extends Component {

  render() {
    return (
		<BrowserRouter>
		  <Main />
        </BrowserRouter>
    );
  }
}

export default App;