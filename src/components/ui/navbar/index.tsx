import React from "react";
import styles from "./navbar.module.scss";
import logo from "icons/logo.svg";
import Back from "../icons/back";
import Search from "containers/ui/search";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

const Navbar: React.FC<RouteComponentProps> = (props) => {
  const handleBackClick = () => {
    props.history.goBack();
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to="/home">
            <img className={styles.logo} alt="logo" src={logo} />
          </Link>
          {props.location.pathname.includes("animals") && (
            <div className={styles.search}>
              <Search small query={""} showSuggestions isInsideNavbar />
            </div>
          )}
        </div>
        {!props.location.pathname.includes("home") && (
          <div className={styles.back} onClick={handleBackClick}>
            <Back color="#ffffff" size="32" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
