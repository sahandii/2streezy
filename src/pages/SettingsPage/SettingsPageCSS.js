import styled from "styled-components";
import { direction, device } from "../../assets/breakpoints";

export const SettingsPageCSS = styled.div`
	.badge-container img {
		border-radius: 1em;
		background: #69b3ff;
		box-shadow: -5px 5px 16px #5088c2, 5px -5px 16px #82deff;
	}
	/* Settings menu */
	.settings-page {
	}
	.settings-item {
		color: var(--bs-gray-600);
		margin: 2em 0 0.5em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.settings-item--option {
		color: var(--bs-gray-500);
	}
	.user-details--greetings {
		font-size: calc(1.325rem + 0.9vw);
		@media ${direction.minWidth} ${device.desktop} {
			font-size: 1.5rem;
		}
	}
`;
