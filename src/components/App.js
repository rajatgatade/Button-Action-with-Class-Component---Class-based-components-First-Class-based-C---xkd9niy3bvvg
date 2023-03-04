import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false
    };
  }

  handleClick = () => {
    this.setState({
      showParagraph: true
    });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>Click</button>
        {this.state.showParagraph && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    );
  }
}

export default App;
