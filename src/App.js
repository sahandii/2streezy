// import { useState, useRef, useEffect } from "react";
import "react-router";
import { useState } from "react";
import { Navigation } from "./components/shared/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
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
	return (
		<>
			<GlobalStyles />
			<Navigation pageOffset={{ set: setPageOffset }} />
			<div style={{ paddingTop: pageOffset }} className="wrapper">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MoviesPage activeItem={activeItem} setActiveItem={setActiveItem} />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
