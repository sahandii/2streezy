import styled from "styled-components";
import { direction, device } from "../../assets/breakpoints";

export const SettingsPageCSS = styled.div`
	.badge-container img {
		border-radius: 20%;
		background: #69b3ff;
		box-shadow: -5px 5px 16px #5088c2, 5px -5px 16px #82deff;
	}
	/* Settings menu */
	.settings-page {
	}
	.settings-page--wrapper {
		@media ${direction.minWidth} ${device.tablet} {
			min-height: 100vh;
		}
	}
	.settings-item {
		color: var(--bs-gray-600);
		margin: 2em 0 0.5em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.settings-item--name {
		font-weight: 400;
	}
	.settings-item--option {
		font-weight: 300;
		color: var(--bs-gray-500);
	}
	.user-details--greetings {
		font-size: calc(0.9rem + 0.9vw);
	}
`;
