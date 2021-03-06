import { SettingsPageCSS } from "./SettingsPageCSS";
import React from "react";
import { ToggleComponent } from "../../components/shared/ToggleComponent/ToggleComponent";

export default function SettingsPage(props) {
	return (
		<SettingsPageCSS>
			<div className="settings-page container-fluid">
				<div className="settings-page--wrapper row rounded overflow-hidden">
					{/* Left panel */}
					<div className="col-md-8 settings-page--settings-column white-bg p-3 order-1 order-md-0">
						<div className="row p-3">
							<h6 style={{ color: "var(--bs-gray-500)" }} className="m-0 text-uppercase fw-bold">
								General settings
							</h6>
							<div className="settings-item">
								<h6 className="settings-item--name m-0">Language</h6>
								<div className="settings-item--option">
									<p className="m-0">English</p>
								</div>
							</div>
							<div className="settings-item">
								<h6 className="settings-item--name m-0">Dark mode</h6>
								<div className="settings-item--option">
									<ToggleComponent />
								</div>
							</div>
							<hr className="mt-4 mb-5" />
						</div>
					</div>
					{/* Right panel */}
					<div className="col-md-4 settings-page--user-column skyblue-bg p-3 order-0 o">
						<aside className="skyblue-bg p-3 row align-items-center">
							{/* User details */}
							<div className="row d-flex align-items-center">
								<div className="col-3 col-md-5 col-xl-4">
									<Avatar />
								</div>
								<div className="mt-md-3 col-9 col-md-12 col-xl-8">
									<div className="user-details">
										<h3 className="text-nowrap user-details--greetings white m-0">User3217981</h3>
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
											<a className="d-block py-2 white" href="#test">
												Account settings
											</a>
										</li>
										<li>
											<a className="d-block py-2 white" href="#test">
												Refer a friend
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													props.logout();
												}}
												className="d-block py-2 "
												style={{ color: "var(--bs-red)" }}
												href="/"
											>
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

const Avatar = () => {
	return (
		<div className="badge-container">
			<img draggable="false" className="d-block w-100 ratio ratio-1x1" src="https://i.pravatar.cc/1000" alt="Avatar" />
		</div>
	);
};
