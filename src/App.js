// import { useState, useRef, useEffect } from "react";
import "react-router";
import { useState, useEffect } from "react";
import { Navigation } from "./components/shared/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const App = () => {
	// Save marginTop variable
	const [pageOffset, setPageOffset] = useState(0);
	// State for storing the active movie/tv-show which the user has chosen
	const [activeItem, setActiveItem] = useState();
	// Global CSS vars
	const GlobalStyles = createGlobalStyle`
	  :root {
		--nav-height: ${pageOffset}px;
		--ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000);
		--ease-in-out-quint: cubic-bezier(0.860, 0.000, 0.070, 1.000);
	  }
	`;
	useEffect(() => {
		if (activeItem) {
			document.querySelector("html").style.overflowY = "hidden";
		} else {
			document.querySelector("html").style.overflowY = "";
		}
	}, [activeItem]);

	return (
		<>
			<GlobalStyles />
			<div style={{ paddingTop: pageOffset, height: "2000px" }} className="wrapper">
				<BrowserRouter>
					<Navigation pageOffset={{ set: setPageOffset }} />
					<Routes>
						<Route path="/" element={<MoviesPage activeItem={activeItem} setActiveItem={setActiveItem} />} />
						<Route path="/settings" element={<SettingsPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
