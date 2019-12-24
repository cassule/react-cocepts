import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./Header";
import Post from "./Post";

import "./style.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Post />
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
