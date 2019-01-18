import React, { Component } from 'react';
import { Row } from 'reactstrap';
import List from '../components/List';
import Search from '../components/search';

class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: props.animals.animals
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(event) {
    this.setState({
      animals: event.target.value === '' ? this.props.animals.animals : 
                     this.state.animals.filter(function(animal) {
                       return animal.commonName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
                              animal.scientificName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
                       })
		    });
  }
  render() {
    return (
	<div className="container">
	  <Row>
	    <div className="col-12">
		<Search handleSearchChange={this.handleSearchChange} />
	    </div>
          </Row>
	  <Row>
	    <div className="col-12">
		<List animals={this.state.animals} />
	    </div>
	  </Row>
	</div>
    );
  }
}

export default AnimalList;