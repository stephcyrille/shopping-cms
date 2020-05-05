import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from "./routes/routes";




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
