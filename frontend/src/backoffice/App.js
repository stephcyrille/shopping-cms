import React, { Component } from "react";

//import libraries
import { connect } from "react-redux";

import { initAxios } from "./utils/auth_utils";


initAxios()
export default
@connect((state, props) => ({
}))

class App extends Component {
  render() {
    return (
        <div>
          <h4>Dashboard home</h4>
        </div>

    );
  }

}
