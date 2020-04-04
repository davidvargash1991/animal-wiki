import React from "react";
import styles from "./gallery.module.scss";
import _ from "lodash";
import Loader from "components/ui/loader";
import { IPhotosState } from "store/photos/reducer";
import ReactImageAppear from "react-image-appear";

interface IGalleryProps {
  Gallery: IPhotosState;
}

const Gallery: React.FC<IGalleryProps> = (props) => {
  if (props.Gallery.isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  } else if (props.Gallery.errMess) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.error}>{props.Gallery.errMess}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.photos}>
        {_.map(props.Gallery.photos, (photo) => {
          if (photo.farm !== 0) {
            return (
              <ReactImageAppear
                className={styles.photo}
                key={photo.id}
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
                animation="bounceIn"
                showLoader={false}
              />
            );
          }
        })}
      </div>
    );
  }
};

export default Gallery;
