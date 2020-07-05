import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header> </header>
        <div className="App">
          <Link to='/visualizer'>visualzier</Link>
          <h1> Hello, World!!!!! </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;