import React, { Component } from "react";
import Stars from "./Stars";

class Experience extends Component {
	render() {
		return (
			<div className="container experience">
				<div className="row">
					<div className="col-6">
						<div className="experience-text-style">
							<p className="experience-main">Experience</p>
							<h1>Canada’s Capital by Canoe</h1>
							<p className="experience-host">
								hosted by{" "}
								<a href="#" className="host-name">
									Paul
								</a>
							</p>
							<p className="experience-city">Ottawa</p>
							<Stars rating={5} />
						</div>
					</div>
					<div className="col-6">
						<img
							className="experience-pic round-border"
							src={"/image/d-1.jpg"}
							alt="img"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
