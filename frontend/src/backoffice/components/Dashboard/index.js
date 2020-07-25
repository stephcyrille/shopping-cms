import React from "react";
import Wrapper from "./Wrapper/index";

class Index extends React.Component {
  render() {
    //path of dashboard
    const { path } = this.props.match;
    return (
      <div id="dashboard-main">
        {/* contain side bar and nav bar */}
        <div id="dashboard-wrapper">
          <Wrapper path={path} />
        </div>

      </div>
    );
  }
}

export default Index;
