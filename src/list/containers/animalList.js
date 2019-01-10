import React, { Component } from 'react';
import animalData from '../../../animals.json';
import List from '../components/list';

class AnimalList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animals: animalData
		};
	}
	render() {
		return (
			<div>
				<List animals={this.state.animals} />
			</div>
		);
	}
}
export default AnimalList;