import React from 'react';

function AnimalDetails(props) {
  if (props.animal){
    return(
      <div>
          <h1>{props.animal.commonName}</h1>
      </div>
    );
  } else {
    return null;
  }
}
export default AnimalDetails;