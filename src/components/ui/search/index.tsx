import React, { PureComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import styles from "./search.module.scss";
import cx from "classnames";
import _ from "lodash";
import SearchItem from "./item";
import icon from "icons/search.svg";
import { IAnimalsState } from "store/animals/reducer";
import { isMobile } from "react-device-detect";

interface ISearchProps extends RouteComponentProps {
  query: string;
  small: boolean;
  Animals: IAnimalsState;
  showSuggestions: boolean;
  isInsideNavbar?: boolean;
}

interface ISearchState {
  searchTerm: string;
}

class Search extends PureComponent<ISearchProps, ISearchState> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      searchTerm: props.query,
    };
  }
  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };
  private goToSearch = () => {
    const { searchTerm } = this.state;
    const { Animals } = this.props;
    const { animals } = Animals;
    if (searchTerm.trim() !== "") {
      const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
      const data = animals.filter((animal) => {
        return (
          animal.commonName.toLowerCase() === lowerCaseSearchTerm ||
          animal.scientificName.toLowerCase() === lowerCaseSearchTerm
        );
      });
      if (data.length === 1) {
        this.props.history.push(`/animals/${data[0].id}`);
      } else {
        this.props.history.push(
          `/search?query=${encodeURIComponent(searchTerm.trim())}`
        );
      }
    }
  };
  private hanldleButtonClick = () => {
    this.goToSearch();
  };
  private listenKeyboard = (evt: any) => {
    const { searchTerm } = this.state;
    if ((evt.key === "enter" || evt.keyCode === 13) && searchTerm !== "") {
      this.goToSearch();
    }
  };
  public componentWillUnmount() {
    window.removeEventListener("keydown", this.listenKeyboard, true);
  }
  public componentDidUpdate(prevProps: ISearchProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ searchTerm: "" });
    }
  }
  public componentDidMount() {
    window.addEventListener("keydown", this.listenKeyboard, true);
    if (this.inputRef.current && !isMobile) {
      this.inputRef.current.focus();
    }
  }
  public render() {
    const { searchTerm } = this.state;
    const { Animals, showSuggestions, isInsideNavbar } = this.props;
    const { animals } = Animals;
    const query = searchTerm.toLowerCase().trim();
    const data = animals.filter(
      (animal) =>
        animal.commonName.toLowerCase().indexOf(query) !== -1 ||
        animal.scientificName.toLowerCase().indexOf(query) !== -1
    );
    return (
      <div className={styles.main}>
        <div
          className={
            this.props.small ? styles.containerSmall : styles.container
          }
        >
          <input
            ref={this.inputRef}
            className={styles.input}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button className={styles.button} onClick={this.hanldleButtonClick}>
            <img src={icon} alt="search" title="search" />
          </button>
        </div>
        {searchTerm && showSuggestions && (
          <div className={cx(styles.options, isInsideNavbar ? styles.nav : "")}>
            {_.map(data.slice(0, 3), (animal) => {
              return <SearchItem animal={animal} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Search);
