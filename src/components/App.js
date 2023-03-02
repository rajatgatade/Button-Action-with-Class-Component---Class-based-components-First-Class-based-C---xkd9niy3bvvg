handleClick = () => {
	this.setState({renderPara: true});
};

render() {
	return(
		<div id="main">
			{ /* Do not remove this main div!! */ }
			<button id="click" onClick={this.handleClick}>Click</button>
			{this.state.renderPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
		</div>
	);
	}

}


export default App;

