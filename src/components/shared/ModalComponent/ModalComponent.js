import { ModalComponentCSS } from "./ModalComponentCSS";
import { useRef, useState, useEffect } from "react";

export const ModalComponent = ({ setActiveItem, activeItem }) => {
	useEffect(() => {
		return () => {};
	}, []);
	const removeActiveItem = () => {
		setActiveItem("");
	};
	const modal = useRef();
	return (
		<ModalComponentCSS>
			<div ref={modal} className={"movie-modal" + (activeItem ? " item-selected" : "")}>
				<div className="modal-component__wrapper white-bg">
					{activeItem ? (
						<div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280${activeItem.backdrop_path}')` }} className="container p-4">
							<header className="row header-nav">
								<div className="header-left col-6">
									<button
										onClick={() => {
											removeActiveItem();
										}}
										className="border-0"
									>
										Back
									</button>
								</div>
								<div className="header-right col-6 text-end">
									<button
										onClick={() => {
											removeActiveItem();
										}}
										className="border-0"
									>
										Like
									</button>
								</div>
							</header>
							<div className="container">
								<div className="row">
									<div className="p-4 col-12">
										<h2>{activeItem.title}</h2>
										<p>{activeItem.overview}</p>
									</div>
								</div>
							</div>
						</div>
					) : (
						""
					)}
				</div>
				<div
					onClick={() => {
						removeActiveItem();
					}}
					className="backdrop"
				></div>
			</div>
		</ModalComponentCSS>
	);
};
