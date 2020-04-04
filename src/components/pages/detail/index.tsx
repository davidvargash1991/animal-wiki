import React, { Component } from "react";
import styles from "./detail.module.scss";
import Gallery from "../gallery";
import Status from "components/ui/animalCard/status";
import { IPhotosState } from "store/photos/reducer";
import { IAnimalsState } from "store/animals/reducer";
import { IAnimal } from "models/animals";

interface IDetailProps {
  animalId: number;
  Gallery: IPhotosState;
  Animals: IAnimalsState;
  onGetPhotos: (name: string) => void;
}

interface IDetailState {
  animal: IAnimal;
  viewportWidth: number;
}

class Detail extends Component<IDetailProps, IDetailState> {
  constructor(props: IDetailProps) {
    super(props);
    this.state = {
      animal: props.Animals.animals.filter(
        (animal) => animal.id === props.animalId
      )[0],
      viewportWidth: window.innerWidth,
    };
  }
  public updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };
  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  public componentWillMount() {
    this.updateWindowDimensions();
  }
  public componentDidMount() {
    this.props.onGetPhotos(this.state.animal.scientificName);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  public render() {
    const { animal } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.data}>
            <h1>{animal.commonName}</h1>
            <div className={styles.main}>
              <img className={styles.avatar} src={animal.image} alt="avatar" />
              <div className={styles.secondary}>
                {animal.length && this.state.viewportWidth > 767 && (
                  <div className={styles.property}>
                    <div className={styles.title}>Length:</div>
                    <div className={styles.value}>{animal.length}</div>
                  </div>
                )}
                {animal.weight && this.state.viewportWidth > 767 && (
                  <div className={styles.property}>
                    <div className={styles.title}>Weigth:</div>
                    <div className={styles.value}>{animal.weight}</div>
                  </div>
                )}
              </div>
            </div>
            <p className={styles.scientificName}>{animal.scientificName}</p>
            <Status status={animal.conservationStatus} />
            {animal.length && this.state.viewportWidth <= 767 && (
              <div className={styles.property}>
                <div className={styles.title}>Length:</div>
                <div className={styles.value}>{animal.length}</div>
              </div>
            )}
            {animal.weight && this.state.viewportWidth <= 767 && (
              <div className={styles.property}>
                <div className={styles.title}>Weigth:</div>
                <div className={styles.value}>{animal.weight}</div>
              </div>
            )}
            <h3>Gallery</h3>
            <Gallery Gallery={this.props.Gallery} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
