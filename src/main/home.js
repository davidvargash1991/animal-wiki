import React from 'react';
import { Jumbotron } from 'reactstrap';
import AnimalList from '../list/containers/animalList';
	
function Home(props) {
	return(
		<React.Fragment>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>Animal - Wiki</h1>
							<p>The best wildlife interactive encyclopedia, filled with videos, images and more of the wildlife of our world!!!!</p>
						</div>
					</div>
				</div>
			</Jumbotron>
			<AnimalList animals={props.animals} filterAnimals={props.filterAnimals} />
		</React.Fragment>
	);
}
export default Home;