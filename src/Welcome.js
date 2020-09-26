import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { BrowserRouter as Router } from "react-router-dom";


class Welcome extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Content />
      </Router>
    );
  }
}

export default Welcome;
