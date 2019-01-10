import React from 'react';
import { Media } from 'reactstrap';
import './List.css';

function ConservationStatus({status}) {
	switch(status) {
	  case 'LC':	  
	  case 'NT':
		return <span class="badge badge-success">{status}</span>
		break;
	  case 'VU':
		return <span class="badge badge-primary">VU</span>
		break;
	  case 'EN':
		return <span class="badge badge-primary">EN</span>
		break;		
	  case 'CR':
		return <span class="badge badge-danger">CR</span>
		break;		
	  default:
		return null;
	} 
}

function List(props) {
	return(
		<Media list>			
			{
				props.animals.map((animal) => {
					return (
						<Media key={animal.id} tag="li" className="Media">
							<Media left middle>
								<div className="img-div">
									<img src={animal.image} 
									     alt={animal.commonName}
										 height={200}
										 width={200} />
								</div>
							</Media>
							<Media body className="ml-5">
								<Media heading><h1>{animal.commonName}</h1></Media>
								<h2><i>{animal.scientificName}</i></h2>
								<h3>Conservation Status: <ConservationStatus status={animal.conservationStatus} /></h3>
							</Media>
						</Media>					
					);
				})				
			}			
		</Media>
	);
}

export default List;