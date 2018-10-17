import React, { Component } from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col
} from "reactstrap";
import classnames from "classnames";
import Reviews from "./Reviews";
import Nearby from "./Nearby";

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1"
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<div>
				<div className="round-border">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="tab-wrapper">
									<Nav tabs>
										<NavItem>
											<NavLink
												className={classnames({
													active: this.state.activeTab === "1"
												})}
												onClick={() => {
													this.toggle("1");
												}}
											>
												OVERVIEW
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({
													active: this.state.activeTab === "2"
												})}
												onClick={() => {
													this.toggle("2");
												}}
											>
												SPECIALIZATION
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({
													active: this.state.activeTab === "3"
												})}
												onClick={() => {
													this.toggle("3");
												}}
											>
												NEAR BY
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({
													active: this.state.activeTab === "4"
												})}
												onClick={() => {
													this.toggle("4");
												}}
											>
												GALLERY
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({
													active: this.state.activeTab === "5"
												})}
												onClick={() => {
													this.toggle("5");
												}}
											>
												REVIEWS
											</NavLink>
										</NavItem>
									</Nav>
								</div>
								<TabContent activeTab={this.state.activeTab}>
									<TabPane tabId="1">
										<Row>
											<Col sm="4">
												<div className="tab1-pic-wrapper">
													<img
														className="round-border"
														src={"/image/d-2.jpg"}
														alt="img"
													/>
												</div>
											</Col>
											<Col sm="8">
												<div className="tab1-text">
													<h4 className="overview-main">Overview</h4>
													<div className="text-overview">
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry’s standard dummy text ever since the
															1500s, when an unknown printer took a galley of
															type and scrambled it to make a type specimen
															book.
														</p>

														<p>
															It has survived not only five centuries, but also
															the leap into electronic typesetting, remaining
															essentially unchanged. It was popularised in the
															1960s with the release of Letraset sheets
															containing Lorem Ipsum passages, and more recently
															with desktop publishing software like Aldus
															PageMaker including versions of Lorem Ipsum.
														</p>

														<p>
															It has survived not only five centuries, but also
															the leap into electronic typesetting, remaining
															essentially unchanged. It was popularised in the
															1960s with the release of Letraset sheets
															containing Lorem Ipsum passages, and more recently
															with desktop publishing software like Aldus
															PageMaker including versions of Lorem Ipsum.
														</p>
													</div>
												</div>
											</Col>
											<Col sm="12">
												<div className="tab2-pic-wrapper">
													<img
														className="tab2-pic"
														src={"image/image 39.jpg"}
														alt="img"
													/>
												</div>
												<div className="tab2-text-wrapper">
													<p className="tab2-text-style">
														Lorem Ipsum is simply dummy text of the printing and
														typesetting industry. Lorem Ipsum has been the
														industry’s standard dummy text ever since the 1500s,
														when an unknown printer took a galley of type and
														scrambled it to make a type specimen book.
													</p>
												</div>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId="2">
										<Row>
											<Col sm="12" />
										</Row>
									</TabPane>
									<TabPane tabId="3">
										<Nearby />
									</TabPane>
									<TabPane tabId="4">
										<Row>
											<Col sm="12">
												<div className="tab4-text">
													<h4 className="main-text-style">Gallery</h4>
												</div>
											</Col>

											<Col sm="6">
												<img
													className="tab4-pic"
													src={"/image/d-1.jpg"}
													alt="img"
												/>
											</Col>
											<Col sm="6">
												<img
													className="tab4-pic"
													src={"/image/d-1.jpg"}
													alt="img"
												/>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId="5">
										<Reviews />
									</TabPane>
								</TabContent>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tabs;
