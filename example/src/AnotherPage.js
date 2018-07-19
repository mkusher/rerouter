// @flow

import React, { Component } from "react";
import { route, Link } from "./router";
import MainPage from "./MainPage";

export class AnotherPage extends Component<{}> {
  render() {
    return (
      <div className="another-page">
        This is another page. <Link to={MainPage}>Main page</Link>
      </div>
    );
  }
}

export default route("/another")(AnotherPage);
