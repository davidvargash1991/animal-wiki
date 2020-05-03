import React, { useState } from "react";
import styles from "./image.module.scss";
import cx from "classnames";
import Loader from "./loader";

interface IImageProps {
  title: string;
  id: string;
  url: string;
  index: number;
  onImgClick: (index: number) => void;
}

const ImageGallery: React.FC<IImageProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const onImgLoad = () => {
    setIsLoading(false);
  };

  const handleImgClick = () => {
    if (!isLoading) {
      props.onImgClick(props.index);
    }
  };

  return (
    <div className={cx(styles.container, !isLoading ? styles.loaded : "")}>
      <img
        className={styles.photo}
        key={props.id}
        src={props.url}
        alt={props.title}
        onLoad={onImgLoad}
        onClick={handleImgClick}
      />
      {isLoading && (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
