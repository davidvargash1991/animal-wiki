import React from "react";
import styles from "./search.module.scss";
import _ from "lodash";
import Search from "../../ui/search";
import Card from "../../ui/animalCard";
import { IAnimalsState } from "store/animals/reducer";
import { withRouter, RouteComponentProps } from "react-router";

interface ISearchProps extends RouteComponentProps {
  Animals: IAnimalsState;
}

const SearchPage: React.FC<ISearchProps> = (props) => {
  const query = decodeURIComponent(
    props.location.search.substr(7)
  ).toLowerCase();
  const data = props.Animals.animals.filter((animal) => {
    return (
      animal.commonName.toLowerCase().indexOf(query) !== -1 ||
      animal.scientificName.toLowerCase().indexOf(query) !== -1
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.data}>
          <h1>Search Results</h1>
          <Search small={false} query={query} />
          {_.map(data, (animal) => {
            return <Card key={animal.id} animal={animal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchPage);
