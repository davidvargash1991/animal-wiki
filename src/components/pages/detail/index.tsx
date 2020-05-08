import React, { Component } from "react";
import styles from "./detail.module.scss";
import Gallery from "../gallery";
import Share from "components/ui/icons/share";
import Status from "components/ui/animalCard/status";
import { IPhotosState } from "store/photos/reducer";
import { IAnimalsState } from "store/animals/reducer";
import { IAnimal } from "models/animals";
import { browserhasShareApi, share } from "utils/shareApi";

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
  private handleShareClick = () => {
    share(this.state.animal.commonName);
  };
  public updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };
  private renderLength = () => {
    const { animal } = this.state;
    if (animal.length) {
      return (
        <p>
          <span className={styles.property}>Length</span>
          <span className={styles.value}>{animal.length}</span>
        </p>
      );
    } else {
      return null;
    }
  };
  private renderWeight = () => {
    const { animal } = this.state;
    if (animal.weight) {
      return (
        <p>
          <span className={styles.property}>Weigth</span>
          <span>{animal.weight}</span>
        </p>
      );
    } else {
      return null;
    }
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
            <h1>
              {animal.commonName}
              {browserhasShareApi && (
                <span onClick={this.handleShareClick}>
                  <Share color="#3a9e2c" size={"36"} />
                </span>
              )}
            </h1>
            <div className={styles.main}>
              <img className={styles.avatar} src={animal.image} alt="avatar" />
              <div className={styles.secondary}>
                {this.state.viewportWidth > 767 && this.renderLength()}
                {this.state.viewportWidth > 767 && this.renderWeight()}
              </div>
            </div>
            <p className={styles.scientificName}>{animal.scientificName}</p>
            <Status status={animal.conservationStatus} />
            {this.state.viewportWidth <= 767 && this.renderLength()}
            {this.state.viewportWidth <= 767 && this.renderWeight()}
            <h3>Gallery</h3>
            <Gallery Gallery={this.props.Gallery} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
