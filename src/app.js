import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main/main';
import './css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store} >
		    <BrowserRouter>
		      <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;