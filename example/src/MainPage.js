// @flow

import React, { Component } from "react";
import { indexRoute, Link } from "./router";
import AnotherPage from "./AnotherPage";

export class MainPage extends Component<{}> {
  render() {
    return (
      <div className="main-page">
        This is main page. <Link to={AnotherPage}>Another page</Link>
      </div>
    );
  }
}

export default indexRoute(MainPage);
