import React, { Component } from "react";
import Stars from "./Stars";
import { Row, Col } from "reactstrap";
import Card from "./Card";

class Reviews extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col sm="8">
						<h4 className="main-text-style">Review</h4>

						<button className="leave-review">Leave a Review</button>

						<ul class="list-unstyled">
							<li class="media">
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>

								<div class="media-body">
									<p className="user-data">
										<i class="fas fa-user" />
										That Guy
									</p>
									<p className="user-data">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<Stars rating={5} />
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
							</li>
							<li class="media my-4">
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>
								<div class="media-body reply">
									Reply
									<p className="user-data">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<Stars rating={5} />
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
							</li>
							<li class="media my-4">
								<div class="media-body">
									<p className="user-data right">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>
							</li>
							<li class="media my-4">
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>
								<div class="media-body">
									<p className="user-data">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<Stars rating={5} />
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
							</li>
							<li class="media my-4">
								<div class="media-body">
									<p className="user-data right">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>
							</li>
							<li class="media my-4">
								<div class="media-body">
									<p className="user-data right">
										<i class="far fa-clock" />
										Dec 16, 2014
									</p>
									<Stars rating={5} />
									<div className="review-text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className="reply-right">
										<a href="#" className="reply-button com-1">
											<i class="fas fa-reply" /> reply
										</a>
									</div>
								</div>
								<div className="text-center">
									<img
										class="mr-3 tab5-pic"
										src={"/image/profile_img.png"}
										alt="image"
									/>
									 <div className="username">username</div>

								</div>
							</li>
						</ul>
					</Col>
					<Col sm="4">
						<h5 className="tab5-text">Related Articles</h5>

						<div className="card-wrapper">
							<Card
								image={"image/5.jpg"}
								text={"Lorem Ipsum is simply dummy text"}
								status={true}
								rating={5}
							/>
							<Card
								image={"image/6.jpg"}
								text={"Lorem Ipsum is simply dummy text"}
								status={true}
								rating={5}
							/>
							<Card
								image={"image/7.jpg"}
								text={"Lorem Ipsum is simply dummy text"}
								status={true}
								rating={5}
							/>
							<Card
								image={"image/8.jpg"}
								text={"Lorem Ipsum is simply dummy text"}
								status={true}
								rating={5}
							/>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Reviews;
