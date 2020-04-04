import React from "react";
import styles from "./navbar.module.scss";
import logo from "icons/logo.svg";
import back from "icons/back.svg";
import Search from "../search";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

const Navbar: React.FC<RouteComponentProps> = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to="/home">
            <img className={styles.logo} alt="logo" src={logo} />
          </Link>
          {props.location.pathname.includes("animals") && (
            <Search small query={""} />
          )}
        </div>
        {!props.location.pathname.includes("home") && (
          <img
            className={styles.back}
            src={back}
            alt="back"
            title="go back"
            onClick={(e) => props.history.goBack()}
          />
        )}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
