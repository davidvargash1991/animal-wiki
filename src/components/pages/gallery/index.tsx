import React, { useState } from "react";
import styles from "./gallery.module.scss";
import _ from "lodash";
import Error from "./error";
import Loader from "components/ui/loader";
import Lightbox from "components/ui/lightbox";
import { IPhotosState } from "store/photos/reducer";
import Image from "components/ui/imageGallery";

interface IGalleryProps {
  Gallery: IPhotosState;
  isOnline: boolean;
}

const Gallery: React.FC<IGalleryProps> = (props) => {
  const [imgIndex, setImgIndex] = useState(-1);

  const handleImgClick = (index: number) => {
    setImgIndex(index);
  };

  const handleLightboxClose = () => {
    setImgIndex(-1);
  };

  if (props.Gallery.isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  } else if (props.Gallery.errMess) {
    return <Error isOnline={props.isOnline} errMess={props.Gallery.errMess} />;
  } else if (imgIndex > -1) {
    return (
      <Lightbox
        images={_.map(props.Gallery.photos, (photo) => {
          return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        })}
        selectedIndex={imgIndex}
        onClose={handleLightboxClose}
      />
    );
  } else {
    return (
      <div className={styles.photos}>
        {_.map(props.Gallery.photos, (photo, idx) => {
          if (photo.farm !== 0) {
            return (
              <Image
                key={photo.id}
                title={photo.title}
                id={photo.id}
                index={idx}
                url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                onImgClick={handleImgClick}
              />
            );
          }
        })}
      </div>
    );
  }
};

export default Gallery;
