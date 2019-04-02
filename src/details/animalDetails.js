import React from "react";
import Gallery from "./gallery";
import { NavLink } from "react-router-dom";
import "./animalDetails.css";

function AnimalDetails(props) {
  window.scrollTo(0, 0);
  if (props.animal) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1>{props.animal.commonName}</h1>
            <br />
            <h2>
              <i>{props.animal.scientificName}</i>
            </h2>
            <NavLink className="btn btn-primary" to="/home">
              <span className="fa fa-arrow-left fa-lg" /> Back
            </NavLink>
          </div>
          <div className="col-sm-4">
            <img
              src={props.animal.image}
              alt={props.animal.commonName}
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="gallery-title">Gallery</h2>
          </div>
        </div>
        <Gallery name={props.animal.scientificName} />
      </div>
    );
  } else {
    return null;
  }
}
export default AnimalDetails;
