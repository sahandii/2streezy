import React, { Component } from "react";

export default class SettingsPage extends Component {
	render() {
		return (
			<>
				<div className="container-fluid my-5">
					<div className="row">
						<div className="col-2">
							<Avatar />
						</div>
						<div className="col-10">
							<h2 className="fw-bold">Hello streamer 👋🏼</h2>
						</div>
					</div>
				</div>
			</>
		);
	}
}

const Avatar = () => {
	return (
		<>
			<div className="badge-container ratio ratio-1x1">
				<img src="..jpg" alt="Avatar" />
			</div>
		</>
	);
};
