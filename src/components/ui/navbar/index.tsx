import React from "react";
import styles from "./navbar.module.scss";
import logo from "icons/logo.svg";
import Search from "../search";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

const Navbar: React.FC<RouteComponentProps> = (props) => {
  console.log(props.location.pathname);
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link to="/home">
          <img className={styles.logo} alt="logo" src={logo} />
        </Link>
        {props.location.pathname.includes("animals") && (
          <Search small query={""} />
        )}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
