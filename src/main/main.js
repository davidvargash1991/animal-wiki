import React, { Component } from 'react';
import Home from './home';
import Header from '../layout/header';
import AnimalDetails from '../details/animalDetails';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAnimals } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    animals: state.animals
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAnimals:  () => {dispatch(fetchAnimals())}
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchAnimals();
  }

	render() {

    const Details = ({match}) => {        
      return(
          <AnimalDetails animal={this.props.animals.animals.filter((animal) => 
                                 animal.id === parseInt(match.params.animalId,10))[0]} />
      );
    };    

	  return(
        <div>
          <Header />
          <Switch>
            <Route path='/home' component={() => <Home animals={this.props.animals} filterAnimals={this.props.filterAnimals} />} />
            <Route path='/animals/:animalId' component={Details} />
            <Redirect to="/home" />
          </Switch>				  
        </div>	  
	  );
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));