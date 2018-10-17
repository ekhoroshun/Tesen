import React, { Component } from "react";
import Stars from "./Stars";

class Card extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div style={{ width: 250 }} class="card card-style">
				<img class="card-img-top" alt="img" src={this.props.image} />
				<div class="card-body">
					<p class="card-text">{this.props.text}</p>
					{this.props.status ? <Stars rating={this.props.rating} /> : null}
				</div>
			</div>
		);
	}
}

export default Card;
