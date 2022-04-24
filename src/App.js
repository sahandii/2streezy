import "react-router";
import { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigation } from "./components/shared/Navigation/Navigation";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const App = () => {
	// Save marginTop variable
	const [pageOffset, setPageOffset] = useState(0);
	// State for storing the active movie/tv-show which the user has chosen
	const [activeItem, setActiveItem] = useState();

	// Auth state
	const [user, setUser] = useState();

	useEffect(() => {
		console.log(auth);
		if (activeItem) {
			document.querySelector("html").style.overflowY = "hidden";
		} else {
			document.querySelector("html").style.overflowY = "";
		}
	}, [auth, activeItem]);

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const logout = async () => {
		await signOut(auth).then(console.log("signed out"));
	};

	// Global CSS vars
	const GlobalStyles = createGlobalStyle`
	:root {
		--nav-height: ${pageOffset}px;
		--ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000);
		--ease-in-out-quint: cubic-bezier(0.860, 0.000, 0.070, 1.000);
	}
	svg, svg path {
		fill: currentColor;
	}
	`;

	return (
		<>
			<GlobalStyles />
			{!user ? (
				<div className="wrapper">
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<WelcomePage auth={auth} user={user} />} />
						</Routes>
					</BrowserRouter>
				</div>
			) : (
				<div style={{ paddingTop: pageOffset }} className="wrapper">
					<BrowserRouter>
						<Navigation pageOffset={{ set: setPageOffset }} />
						<Routes>
							<Route path="/" element={<MoviesPage activeItem={activeItem} setActiveItem={setActiveItem} />} />
							<Route path="/settings" element={<SettingsPage logout={logout} />} />
						</Routes>
					</BrowserRouter>
				</div>
			)}
		</>
	);
};

export default App;
