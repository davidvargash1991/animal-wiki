import React, { PureComponent } from "react";
import styles from "./search.module.scss";
import icon from "icons/search.svg";
import { withRouter, RouteComponentProps } from "react-router";

interface ISearchProps extends RouteComponentProps {
  query: string;
  small: boolean;
}

interface ISearchState {
  searchTerm: string;
}

class Search extends PureComponent<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      searchTerm: props.query,
    };
  }
  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };
  private hanldleButtonClick = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.props.history.push(
        `/search?query=${encodeURIComponent(searchTerm)}`
      );
    }
  };
  private listenKeyboard = (evt: any) => {
    const { searchTerm } = this.state;
    if ((evt.key === "enter" || evt.keyCode === 13) && searchTerm !== "") {
      this.props.history.push(
        `/search?query=${encodeURIComponent(searchTerm)}`
      );
    }
  };
  public componentWillUnmount() {
    window.removeEventListener("keydown", this.listenKeyboard, true);
  }
  public componentDidMount() {
    window.addEventListener("keydown", this.listenKeyboard, true);
  }
  public render() {
    const { searchTerm } = this.state;
    return (
      <div
        className={this.props.small ? styles.containerSmall : styles.container}
      >
        <input
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
    );
  }
}

export default withRouter(Search);
