import React, { Component } from "react";
import "./App.scss";
import { Switch, Route, Router, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Visualizer from "./Visualizer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/visualizer" render={() => <Visualizer />} />
            <Route path="/"  render={() => <Home />}/>
            {/* <Route path="/memo" />
          <Route path="/trash" /> */}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;