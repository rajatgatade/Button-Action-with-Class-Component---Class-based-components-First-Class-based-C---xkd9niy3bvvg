import React, { Component,useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPara: false
    };
  }

  handleButtonClick = () => {
    this.setState({ renderPara: true });
  };

  render() {
    return (
      <div id="main">
        { /* Do not remove this main div!! */ }
        <button id="click" onClick={this.handleButtonClick}>
          Click
        </button>
        {this.state.renderPara ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
