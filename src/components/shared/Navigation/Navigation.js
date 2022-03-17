import { NavigationCSS } from "./NavigationCSS";
import { useState, useRef, useEffect } from "react";
import "react-router";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as StreezyLogo } from "../../../images/str-logo.svg";
import { ReactComponent as SettingsIcon } from "./img/settings.svg";
import { ReactComponent as BookmarkSymbol } from "../../../images/symbols/bookmark.svg";

// import { ReactComponent as UserIcon } from "./img/user.svg";

export const Navigation = ({ pageOffset }) => {
	const navEl = useRef();
	const [scrolled, setScrolled] = useState(false);
	const [navHeight, setNavHeight] = useState();
	// Component on load
	const location = useLocation();
	useEffect(() => {
		const handleScroll = () => {
			// Register scroll event when Navbar gets initialized
			window.addEventListener(
				"scroll",
				() => {
					if (window.scrollY >= navHeight && !scrolled) {
						setScrolled(true);
					} else setScrolled(false);
				},
				true,
			);
		};
		const navHeight = navEl.current.getBoundingClientRect().height;
		setNavHeight(navHeight);
		pageOffset.set(navHeight);
		handleScroll();
	}, [navHeight]);
	return (
		<NavigationCSS>
			<nav ref={navEl} className={"navbar" + (scrolled ? " scrolled" : "")}>
				<div className="container-fluid d-flex justify-content-between align-items-center">
					<div className="navbar-left">
						<Link style={location.pathname === "/" ? { pointerEvents: "none" } : { pointerEvents: "auto" }} to="/">
							<StreezyLogo width="120" height="100%" draggable="false" />
						</Link>
					</div>
					<div className="navbar-center">
						{/* <ul className="m-0 p-0 ls-none">
						<li>Movies</li>
						<li>Shows</li>
					</ul> */}
					</div>
					<div className="navbar-right">
						<ul className="m-0 p-0 ls-none d-inline-flex">
							<li>
								<NavLink to="/watchlist">
									<BookmarkSymbol className="me-3" width="18" height="auto" style={{ fill: "#333" }} draggable="false" />
								</NavLink>
							</li>
							<li>
								<NavLink to="/settings">
									<SettingsIcon draggable="false" />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</NavigationCSS>
	);
};
