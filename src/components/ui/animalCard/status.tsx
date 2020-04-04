import React from "react";
import styles from "./status.module.scss";
import cx from "classnames";

interface ICardProps {
  status: string;
}

const Status: React.FC<ICardProps> = ({ status }) => {
  return (
    <div className={styles.conservationStatus}>
      <div className={cx(styles.status, status === "EX" ? styles.extint : "")}>
        EX
      </div>
      <div
        className={cx(styles.status, status === "EW" ? styles.extintSylv : "")}
      >
        EW
      </div>
      <div className={cx(styles.status, status === "CR" ? styles.red : "")}>
        CR
      </div>
      <div className={cx(styles.status, status === "EN" ? styles.orange : "")}>
        EN
      </div>
      <div className={cx(styles.status, status === "VU" ? styles.yellow : "")}>
        VU
      </div>
      <div className={cx(styles.status, status === "NT" ? styles.green : "")}>
        NT
      </div>
      <div className={cx(styles.status, status === "LC" ? styles.green : "")}>
        LC
      </div>
    </div>
  );
};

export default Status;
