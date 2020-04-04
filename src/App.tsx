import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import Navbar from "./components/ui/navbar";
import Home from "./containers/pages/home";
import Search from "./containers/pages/search";
import Details from "./containers/pages/detail";

const App: React.FC<RouteComponentProps> = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route path="/search" component={() => <Search />} />
        <Route
          path="/animals/:animalId"
          component={(props: any) => (
            <Details animalId={Number(props.match.params.animalId)} />
          )}
        />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default withRouter(App);
