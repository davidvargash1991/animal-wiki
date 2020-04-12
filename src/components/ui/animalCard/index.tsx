import React from "react";
import styles from "./card.module.scss";
import { IAnimal } from "models/animals";
import { Link } from "react-router-dom";
import Image from "./image";
import Status from "./status";

interface ICardProps {
  animal: IAnimal;
}

const Card: React.FC<ICardProps> = ({ animal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.item}>
          <Image animal={animal} />
        </div>
      </div>
      <div className={styles.info}>
        <Link className={styles.commonName} to={`/animals/${animal.id}`}>
          {animal.commonName}
        </Link>
        <p className={styles.scientificName}>{animal.scientificName}</p>
        <Status status={animal.conservationStatus} />
      </div>
    </div>
  );
};

export default Card;
