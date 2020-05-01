import React from "react";
import styles from "./home.module.scss";
import _ from "lodash";
import { isMobile } from "react-device-detect";
import Search from "containers/ui/search";
import { IAnimalsState } from "store/animals/reducer";
import Image from "../../ui/animalCard/image";
import { Link } from "react-router-dom";
import { getRandom } from "utils/array";

interface IHomeProps {
  Animals: IAnimalsState;
}

const Home: React.FC<IHomeProps> = (props) => {
  const data = getRandom(props.Animals.animals, 5);
  return (
    <div className={styles.container}>
      <div>
        <h1>Animal Wiki</h1>
        <p className={styles.text}>Sample React.js Animal encyclopedia </p>
        <div className={styles.animals}>
          {_.map(data, (animal) => {
            return <Image animal={animal} showOverlay />;
          })}
        </div>
        <Search small={false} query="" showSuggestions={!isMobile} />
        <Link to="/search?query=" className={styles.button}>
          See all animals
        </Link>
      </div>
      <div className={styles.createdBy}>Created by David Vargas</div>
    </div>
  );
};

export default Home;
