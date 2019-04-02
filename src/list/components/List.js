import React from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";
import "./List.css";

function ConservationStatus({ status }) {
  switch (status) {
    case "LC":
    case "NT":
      return <span className="badge badge-success">{status}</span>;
    case "VU":
      return <span className="badge badge-primary">VU</span>;
    case "EN":
      return <span className="badge badge-primary">EN</span>;
    case "CR":
      return <span className="badge badge-danger">CR</span>;
    default:
      return null;
  }
}

function List(props) {
  if (props.animals.length === 0) {
    return <h1 className="center">No Data Found</h1>;
  }

  return (
    <Media list>
      {props.animals.map(animal => {
        return (
          <Media key={animal.id} tag="li" className="Media">
            <Media left middle>
              <div className="img-div">
                <Link to={`/animals/${animal.id}`}>
                  <img
                    src={animal.image}
                    alt={animal.commonName}
                    height={200}
                    width={200}
                  />
                </Link>
              </div>
            </Media>
            <Media body className="ml-5">
              <Link to={`/animals/${animal.id}`}>
                <h1>{animal.commonName}</h1>
              </Link>
              <h2>
                <i>{animal.scientificName}</i>
              </h2>
              <h3>
                Conservation Status:{" "}
                <ConservationStatus status={animal.conservationStatus} />
              </h3>
            </Media>
          </Media>
        );
      })}
    </Media>
  );
}

export default List;
