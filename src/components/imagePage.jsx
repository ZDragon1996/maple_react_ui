import React, { Component } from "react";
import Center from "../components/center";
import Top from "../components/top";

class ImagePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Top onMouseCursor={this.props.onMouseCursor} />
        <div className="divier"></div>

        <Center />
      </div>
    );
  }
}

export default ImagePage;
