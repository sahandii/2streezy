import { useState, useRef, useEffect } from "react";
import "react-router";
import { NavLink } from "react-router-dom";
import { ReactComponent as StreezyLogo } from "../../../images/str-logo.svg";
import { ReactComponent as SettingsIcon } from "./img/settings.svg";
// import { ReactComponent as UserIcon } from "./img/user.svg";
import styled from "styled-components";

export const Navigation = ({ pageOffset }) => {
	const navEl = useRef();
	const [scrolled, setScrolled] = useState(false);
	const [navHeight, setNavHeight] = useState();
	// Component on load
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
		<nav ref={navEl} className={"navbar" + (scrolled ? " scrolled" : "")}>
			<div className="container d-flex justify-content-between align-items-center">
				<div className="navbar-left">
					<StreezyLogo width="120" height="100%" draggable="false" />
				</div>
				<div className="navbar-center">
					{/* <ul className="m-0 p-0 ls-none">
						<li>Movies</li>
						<li>Shows</li>
					</ul> */}
				</div>
				<div className="navbar-right">
					<ul className="m-0 p-0 ls-none">
						<li>
							<SettingsIcon draggable="false" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
