import React, { Component } from "react";
import { connect } from "react-redux";

import { initAxios } from "./utils/auth_utils";
import Routes from "./routes/routes";


initAxios()
export default
@connect((state, props) => ({
}))

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>

    );
  }

}
