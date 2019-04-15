import * as React from "react";
import * as ReactDOM from "react-dom";

const target = document.querySelector('.image-target');
if (!target) return;

const placeholder = "https://via.placeholder.com/150/";

export class LazyImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = { src: '' }
		this.setRef = this.setRef.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ src: placeholder });
		}, 2000);

		this.img.onload = function(event) {
			console.log('This gets called when the correct image loads');
		}

		this.img.onerror = function(event) {
			console.error(
				'This gets called when the src gets set to empty string, which as per spec is an invalid value for src'
			);
		}
	}

	setRef(element) { this.img = element; }

	render() {
		// src gets set to '' initally, and gets set to a proper URL in 2s.
		return <img ref={this.setRef} src={this.state.src} />;
	}
}

ReactDOM.render(<LazyImg />, target);
