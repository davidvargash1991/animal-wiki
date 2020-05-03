import React, { PureComponent } from "react";
import styles from "./navbar.module.scss";
import logo from "icons/logo.svg";
import Back from "../icons/back";
import Search from "containers/ui/search";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

interface INavbarState {
  prevHistory: string;
}

class Navbar extends PureComponent<RouteComponentProps, INavbarState> {
  public state = {
    prevHistory: "",
  };

  private handleBackClick = () => {
    if (this.state.prevHistory) {
      this.props.history.goBack();
    } else {
      this.props.history.push("/search?query=");
    }
  };

  public render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link to="/home">
              <img className={styles.logo} alt="logo" src={logo} />
            </Link>
            {this.props.location.pathname.includes("animals") && (
              <div className={styles.search}>
                <Search small query={""} showSuggestions isInsideNavbar />
              </div>
            )}
          </div>
          {this.props.location.pathname.includes("animals") && (
            <div className={styles.back} onClick={this.handleBackClick}>
              <Back color="#ffffff" size="32" />
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
