import React, { Component } from "react";
import styles from "./detail.module.scss";
import Gallery from "../gallery";
import Share from "components/ui/icons/share";
import Status from "components/ui/animalCard/status";
import offline from "icons/offline.png";
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
  isOnline: boolean;
}

class Detail extends Component<IDetailProps, IDetailState> {
  constructor(props: IDetailProps) {
    super(props);
    this.state = {
      animal: props.Animals.animals.filter(
        (animal) => animal.id === props.animalId
      )[0],
      viewportWidth: window.innerWidth,
      isOnline: navigator ? navigator.onLine : true,
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

  private goOnline = () => {
    this.setState({ isOnline: true });
  };

  private goOffline = () => {
    this.setState({ isOnline: false });
  };

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("online", this.goOnline);
    window.removeEventListener("offline", this.goOffline);
  }

  public componentDidMount() {
    this.props.onGetPhotos(this.state.animal.scientificName);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("online", this.goOnline);
    window.addEventListener("offline", this.goOffline);
  }

  public render() {
    const { animal, isOnline } = this.state;

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
            {isOnline ? (
              <React.Fragment>
                <h3>Gallery</h3>
                <Gallery Gallery={this.props.Gallery} />
              </React.Fragment>
            ) : (
              <div className={styles.offline}>
                <img
                  className={styles.offlineIcon}
                  src={offline}
                  alt="offline"
                />
                <p className={styles.offlineText}>
                  It looks like you don't have a connection to the internet,
                  Please check your connection
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
