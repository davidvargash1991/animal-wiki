import React from 'react';
import './search.css';

function Search(props) {
	return (
		<div className="input-group input-group-lg ml-2 mb-2">
		  <input className="Search form-control-lg" placeholder="Search..." 
				 type="text" onChange={props.handleSearchChange}/>
		</div>
	);
}
export default Search;