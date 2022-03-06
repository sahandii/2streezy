import styled from "styled-components";
import { direction, device } from "../../../assets/breakpoints";

// variables
// const borderRadius = "0.3em";

export const ModalComponentCSS = styled.div`
    .movie-modal {
        pointer-events:none;
    }
    .modal-component__wrapper {
        transition: transform .35s var(--ease-out-quint) .1s;
        pointer-events:auto;
        z-index:100;
        position:fixed;
        right:0;
        top:50%;
        width:calc(100vw - 200px);
        height:100vh;
        overflow:hidden;
        transform:translate3d(100%, -50%, 0);
    }
    .item-selected .modal-component__wrapper{
        transform:translate3d(0, -50%, 0);
        box-shadow: -20px 0 60px rgba(0, 0, 0, 0.1);

    }
    .backdrop{
        opacity:0;
        visibility:hidden;
        pointer-events:none;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
        top:0;
		width: 100vw
		height: 100vh;
        background:rgba(0, 0, 0, .5);
        z-index:90;
        transition: .2s linear 0s;
        transition-property: opacity, visibility;
        will-change: opacity, visibility;
    }
    .item-selected .backdrop {
        pointer-events:auto;
        opacity:1;
        visibility:visible;
    }
    .modal-component__poster{}
`;
