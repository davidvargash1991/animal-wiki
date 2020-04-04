import React from "react";
import styles from "./loader.module.scss";

const Loader: React.FC<any> = () => (
  <div className={styles.container}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default Loader;
