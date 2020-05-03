import React from "react";
import styles from "./lightbox.module.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

interface ILightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<ILightboxProps> = ({
  images,
  selectedIndex,
  onClose,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={onClose}>
        X
      </div>
      <AwesomeSlider selected={selectedIndex} animation="openAnimation ">
        {images.map((img, idx) => {
          return <div key={idx} data-src={img} />;
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Lightbox;
