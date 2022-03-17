import { React, useState } from "react";
import styled from "styled-components";

export const ToggleComponent = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<ToggleComponentCSS>
			<div
				onClick={() => {
					setToggle(!toggle);
				}}
				className={"settings-toggle" + (toggle ? " toggled" : "")}
			>
				<div className="toggler"></div>
			</div>
		</ToggleComponentCSS>
	);
};

const ToggleComponentCSS = styled.div`
	.settings-toggle {
		transition: 0.1s linear 0s;
		transition-property: background-color;
		will-change: background-color;
		width: 5em;
		height: 2.5em;
		background-color: var(--bs-gray-400);
		border-radius: 99em;
		position: relative;
		cursor: pointer;
	}
	.settings-toggle.toggled {
		background-color: var(--skyblue);
	}
	.settings-toggle.toggled .toggler {
		transform: translate3d(calc(100% + 0.75em), -50%, 0);
		/* &:after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			width: 2px;
			height: 14px;
			background-color: var(--skyblue);
			transform: translate3d(-50%, -50%, 0);
			border-radius: 99em;
		} */
	}
	.toggler {
		transition: 0.45s var(--ease-in-out-quint) 0s;
		transition-property: transform;
		will-change: transform;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate3d(0.25em, -50%, 0);
		background-color: white;
		width: 2em;
		height: 2em;
		border-radius: 99em;
	}
`;
