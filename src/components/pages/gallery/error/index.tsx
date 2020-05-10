import React from "react";
import styles from "./error.module.scss";
import offline from "icons/offline.png";

interface IErrorProps {
  isOnline: boolean;
  errMess: string;
}

const Error: React.FC<IErrorProps> = (props) => {
  if (props.isOnline) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.error}>{props.errMess}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.offline}>
        <img className={styles.offlineIcon} src={offline} alt="offline" />
        <p className={styles.offlineText}>
          It looks like you don't have a connection to the internet, Please
          check your connection
        </p>
      </div>
    );
  }
};

export default Error;
