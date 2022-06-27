// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    marginLeft: Math.random() * 100 + "%",
    marginTop: Math.random() * 100 + "%",
  };

  handleOnMouseEnter = () => {
    this.setState({
      marginLeft: Math.random() * 100 + "%",
      marginTop: Math.random() * 100 + "%",
    });
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleOnMouseEnter}
        style={{
          background: "pink",
          color: "white",
          display: "inline-block",
          padding: 15,
          marginLeft: this.state.marginLeft,
          marginTop: this.state.marginTop,
        }}
      >
        {" "}
        enter the mouse here{" "}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
