// import { useState, useRef, useEffect } from "react";
import "react-router";
import { useState } from "react";
import { Navigation } from "./components/shared/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	// Save marginTop variable
	const [pageOffset, setPageOffset] = useState(0);
	return (
		<>
			<Navigation pageOffset={{ value: pageOffset, set: setPageOffset }} />
			<div style={{ paddingTop: pageOffset }} className="wrapper">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MoviesPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
