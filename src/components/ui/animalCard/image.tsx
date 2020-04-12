import React from "react";
import styles from "./image.module.scss";
import { IAnimal } from "models/animals";
import { Link } from "react-router-dom";
import Search from "../icons/search";

interface IImageProps {
  animal: IAnimal;
  small?: boolean;
  showOverlay?: boolean;
}

const Image: React.FC<IImageProps> = (props) => {
  const linkStyle: React.CSSProperties = { position: "relative" };
  return (
    <Link style={linkStyle} to={`/animals/${props.animal.id}`}>
      {props.showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <div className={styles.name}>{props.animal.commonName}</div>
            <div className={styles.scientificContainer}>
              <div className={styles.scientific}>
                {props.animal.scientificName}
              </div>
              <Search size="16" color="#ffffff" />
            </div>
          </div>
        </div>
      )}

      <img
        className={props.small ? styles.imgSmall : styles.img}
        alt={props.animal.commonName}
        src={props.animal.image}
      />
    </Link>
  );
};

export default Image;
