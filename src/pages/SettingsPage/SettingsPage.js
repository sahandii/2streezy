import { SettingsPageCSS } from "./SettingsPageCSS";
import React, { Component } from "react";

export default class SettingsPage extends Component {
	render() {
		return (
			<SettingsPageCSS>
				<div className="container my-5">
					<div className="row">
						<div className="col-1">
							<Avatar />
						</div>
						<div className="col-10">
							<h2 className="fw-bold">Hello streamer 👋🏼</h2>
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
			<img className="d-block w-100" src="https://i.pravatar.cc/1000" alt="Avatar" />
		</div>
	);
};
