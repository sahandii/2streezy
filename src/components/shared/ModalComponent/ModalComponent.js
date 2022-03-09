import { ModalComponentCSS } from "./ModalComponentCSS";
import { useRef, useState, useEffect } from "react";
import { ReactComponent as BookmarkIcon } from "../../../images/symbols/bookmark.svg";

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
						<>
							<div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280${activeItem.backdrop_path}')` }} className="backdrop-header container-fluid py-4 px-5">
								<div className="modal-content">
									<header className="row header-nav">
										<div className="header-left col-6">
											<button
												onClick={() => {
													removeActiveItem();
												}}
												className="close-button white-border transparent-bg white black-hover white-bg-hover"
											>
												&#10005;
											</button>
										</div>
										{/* <div className="header-center col-4">
											<h4 className="m-0 fw-bold white text-center">{activeItem.title}</h4>
										</div> */}
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
									<div className="row py-5">
										<div className="col-lg-10 offset-lg-1">
											<div className="row">
												<div className="col-4 col-md-4 col-lg-3 position-relative">
													<div className="poster-wrapper">
														<img draggable="false" className="w-100" src={`https://image.tmdb.org/t/p/w500/${activeItem.poster_path}`} alt={activeItem.title} />
													</div>
												</div>
												<div className="ps-md-5 col-md-8 col-lg-9">
													<div className="d-flex">
														<h2 className="active-item--title w-bold white">{activeItem.title}</h2>
														<button class="bookmark-it transparent-bg border-0"></button>
													</div>
													<div className="details-bar">
														<span className="white year-blip white-border rounded p-2 py-1">{activeItem.release_date.slice(0, 4)}</span>
													</div>
													<p className="item--description white">{activeItem.overview}</p>
													<div className="my-4">
														<button>Watch trailer</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
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
