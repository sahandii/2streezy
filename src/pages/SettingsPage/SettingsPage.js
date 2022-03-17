import { SettingsPageCSS } from "./SettingsPageCSS";
import React, { Component } from "react";
import { ToggleComponent } from "../../components/shared/ToggleComponent/ToggleComponent";
export default class SettingsPage extends Component {
	render() {
		return (
			<SettingsPageCSS>
				<div className="settings-page container-fluid">
					<div style={{ height: "100vh" }} className="row rounded overflow-hidden">
						{/* Left panel */}
						<div className="col-lg-8 settings-page--settings-column white-bg p-3 order-1 order-lg-0">
							<div className="row p-3">
								<h6 style={{ color: "var(--bs-gray-500)" }} className="m-0 text-uppercase fw-normal">
									General settings
								</h6>
								<div className="settings-item">
									<h5 className="settings-item--name m-0">Language</h5>
									<div className="settings-item--option">
										<p className="m-0">English</p>
									</div>
								</div>
								<div className="settings-item">
									<h5 className="m-0">Dark mode</h5>
									<div className="settings-item--option">
										<ToggleComponent />
									</div>
								</div>
								<hr className="mt-4 mb-5" />
							</div>
						</div>
						{/* Right panel */}
						<div className="col-lg-4 settings-page--user-column skyblue-bg p-3 order-0 o">
							<aside className="skyblue-bg p-3 row align-items-center">
								{/* User details */}
								<div className="row d-flex align-items-center">
									<div className="col-3 col-lg-5 col-xl-4">
										<Avatar />
									</div>
									<div className="mt-lg-3 col-9 col-lg-12 col-xl-8">
										<div className="user-details">
											<h2 className="user-details--greetings white m-0">Hi streamer! 👋</h2>
											<h6 className="fw-light white">
												<small>Member since 2022</small>
											</h6>
										</div>
									</div>
								</div>
								{/* User settings */}
								<div className="row mt-4">
									<div className="user-settings">
										<ul className="p-0 m-0 no-underline col-12 white ls-none d-flex flex-column">
											<li>
												<a className="d-block py-2 white" href="#">
													Account settings
												</a>
											</li>
											<li>
												<a className="d-block py-2 white" href="#">
													Refer a friend
												</a>
											</li>
											<li>
												<a className="d-block py-2 " style={{ color: "var(--bs-red)" }} href="#">
													Log out
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
