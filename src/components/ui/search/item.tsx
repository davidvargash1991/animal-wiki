import React from "react";
import styles from "./item.module.scss";
import { IAnimal } from "models/animals";
import Image from "../animalCard/image";
import { Link } from "react-router-dom";

interface ISearchItemProps {
  animal: IAnimal;
}

const SearchItem: React.FC<ISearchItemProps> = ({ animal }) => (
  <div className={styles.container}>
    <Image animal={animal} small />
    <Link to={`/animals/${animal.id}`} className={styles.info}>
      <div className={styles.commonName}>{animal.commonName}</div>
      <p className={styles.scientificName}>{animal.scientificName}</p>
    </Link>
  </div>
);

export default SearchItem;
