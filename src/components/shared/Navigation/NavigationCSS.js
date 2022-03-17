import styled from "styled-components";
// import { direction, device } from "../../../assets/breakpoints";

// variables
const easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";

export const NavigationCSS = styled.div`
	/* 
    = = = = = = = = = = = = 
    Navbar
    = = = = = = = = = = = = 
    */
	nav {
		max-height: 72px;
		z-index: 10;
		transition: 0.4s ${easeInOutQuart} 0s;
		transition-property: width, margin, box-shadow;
		will-change: width, margin, box-shadow;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
		position: fixed;
		top: 0;
		width: 100%;
		padding: 1.5rem 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		display: flex;
		justify-content: space-between;
	}

	nav.scrolled {
		width: calc(100vw - 2em);
		margin: 1em 1em 2em;
		border-radius: 0.5rem;
	}

	.navbar-center {
		display: flex;
		align-items: center;
		ul {
			display: inline-flex;
		}
		ul li {
			color: var(--skyblue);
			font-weight: 500;
			padding: 0 0.5rem;
		}
	}
`;
