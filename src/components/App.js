import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPara: false
    }
  };

  handleClick = () => {
    this.setState({
      showPara: true
    })
  }

  render() {
    return (
      <div id="main">
        { /* Do not remove this main div!! */ }
        <button id="click" onClick={this.handleClick}>Click me!</button>
        {this.state.showPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    );
  }
}

export default App;
