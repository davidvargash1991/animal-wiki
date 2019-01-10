import React from 'react';
import { Media } from 'reactstrap';

function List(props) {
	return(
		<Media list>			
			{
				props.animals.map((animal) => {
					return (
						<Media key={animal.id} tag="li">
							<Media left middle>
								<Media object src={animal.image} 
										alt={animal.commonName} />
							</Media>
							<Media body className="ml-5">
								<Media heading>{animal.commonName}</Media>
							</Media>
						</Media>					
					);
				})				
			}			
		</Media>
	);
}
export default List;