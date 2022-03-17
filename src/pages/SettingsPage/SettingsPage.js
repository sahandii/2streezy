import { SettingsPageCSS } from "./SettingsPageCSS";
import React, { Component } from "react";

export default class SettingsPage extends Component {
	render() {
		return (
			<SettingsPageCSS>
				<div className="settings-page container my-5 p-0">
					<div className="row rounded overflow-hidden">
						<div className="col-lg-8 settings-page--settings-column white-bg p-3 order-1 order-lg-0"></div>
						<div className="col-lg-4 settings-page--user-column skyblue-bg p-3 order-0 order-lg-1">
							<aside className="skyblue-bg p-3 row align-items-center">
								{/* User details */}
								<div className="row">
									<div className="col-3 col-lg-5 col-xl-3">
										<Avatar />
									</div>
									<div className="mt-2 col-9 col-lg-12 col-xl-9">
										<div className="user-details">
											<h2 className="white m-0">Hi streamer! 👋🏼</h2>
											<h6 className="fw-light white">
												<small>Member since 2021</small>
											</h6>
										</div>
									</div>
								</div>
								{/* User settings */}
								<div className="row mt-4">
									<div className="user-settings">
										<ul className="p-0 m-0 no-underline col-12 white ls-none d-flex flex-column">
											<li>
												<a className="d-block py-3 border-bottom white" href="#">
													Account settings
												</a>
											</li>
											<li>
												<a className="d-block py-3 border-bottom white" href="#">
													Refer a friend
												</a>
											</li>
											<li>
												<a className="d-block py-3 border-bottom " style={{ color: "var(--bs-red)" }} href="#">
													Delete account
												</a>
											</li>
										</ul>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</SettingsPageCSS>
		);
	}
}

const Avatar = () => {
	return (
		<div className="badge-container">
			<img draggable="false" className="d-block w-100 ratio ratio-1x1" src="https://i.pravatar.cc/1000" alt="Avatar" />
		</div>
	);
};
