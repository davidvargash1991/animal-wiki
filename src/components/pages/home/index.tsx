import React from "react";
import styles from "./home.module.scss";
import _ from "lodash";
import { isMobile } from "react-device-detect";
import Search from "containers/ui/search";
import { IAnimalsState } from "store/animals/reducer";
import Image from "../../ui/animalCard/image";
import { Link } from "react-router-dom";

interface IHomeProps {
  Animals: IAnimalsState;
}

const Home: React.FC<IHomeProps> = (props) => (
  <div className={styles.container}>
    <div>
      <h1>Animal Wiki</h1>
      <p className={styles.text}>Sample React.js Animal encyclopedia </p>
      <div className={styles.animals}>
        {_.map(props.Animals.animals.slice(0, 5), (animal) => {
          return <Image animal={animal} showOverlay />;
        })}
      </div>
      <Search small={false} query="" showSuggestions={!isMobile} />
      <Link to="/search?query=" className={styles.button}>
        See all animals
      </Link>
    </div>
  </div>
);

export default Home;
