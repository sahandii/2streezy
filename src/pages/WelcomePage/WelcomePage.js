import React, { useEffect, useState } from "react";
import { ReactComponent as StreezyLogo } from "../../images/str-logo.svg";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function WelcomePage(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async () => {
		try {
			const user = await createUserWithEmailAndPassword(props.auth, email, password);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleLogin = async () => {
		try {
			const user = await signInWithEmailAndPassword(props.auth, email, password);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<div className="d-flex align-items-center h-100 skyblue-bg white">
				<div className="container">
					<div className="row p-4">
						<div className="col-12 col-lg-6">
							<div className="col-6">
								<StreezyLogo className="d-inline-flex" style={{ color: "white" }} width="100%" height="100%" draggable="false" />
							</div>
							<h3 className="mt-4 fw-bold">Millions of movies and TV shows to discover. Explore now. </h3>
						</div>
						<div className="col-12 offset-lg-1 col-lg-5 p-4 white-bg rounded">
							<div className="col-12">
								<input
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									required
									type="email"
									placeholder="E-mail"
									className="gray-border fs-6 w-100 white-bg p-3"
								/>
							</div>
							<div className="col-12 mt-4">
								<input
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									required
									type="password"
									placeholder="Password"
									className="gray-border fs-6 w-100 white-bg p-3"
								/>
							</div>
							<div className="col-12 text-center">
								<button
									onClick={() => {
										handleLogin();
									}}
									className="my-4 fw-bold d-inline-flex fs-5 justify-content-center border-0 rounded skyblue-bg white w-100 p-3"
								>
									Log in
								</button>
								<a href="#" className="d-inline-flex fw-medium no-underline skyblue">
									<small>Forgot password?</small>
								</a>
							</div>
							<hr className="gray-border" />
							<button
								onClick={() => {
									handleRegister();
								}}
								className=" fw-bold d-inline-flex fs-5 border-0 rounded skyblue-border skyblue justify-content-center transparent-bg w-100 p-3"
							>
								Sign up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WelcomePage;
