import React from "react";
import styles from "./image.module.scss";
import { IAnimal } from "models/animals";
import { Link } from "react-router-dom";

interface IImageProps {
  animal: IAnimal;
  small?: boolean;
  showTooltip: boolean;
}

const Image: React.FC<IImageProps> = (props) => {
  return (
    <Link to={`/animals/${props.animal.id}`}>
      <img
        className={props.small ? styles.imgSmall : styles.img}
        alt={props.animal.commonName}
        src={props.animal.image}
        title={props.showTooltip ? props.animal.scientificName : ""}
      />
    </Link>
  );
};

export default Image;
