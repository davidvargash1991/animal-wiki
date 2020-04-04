import React from "react";
import styles from "./image.module.scss";
import { IAnimal } from "models/animals";
import { Link } from "react-router-dom";

interface ICardProps {
  animal: IAnimal;
}

const Card: React.FC<ICardProps> = ({ animal }) => {
  return (
    <Link className={styles.imgContainer} to={`/animals/${animal.id}`}>
      <img
        className={styles.img}
        alt={animal.commonName}
        src={animal.image}
        title={animal.scientificName}
      />
    </Link>
  );
};

export default Card;
