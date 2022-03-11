import { ModalComponentCSS } from "./ModalComponentCSS";
import { useState, useEffect } from "react";

export const ModalComponent = ({ activeItem, setActiveItem }) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		activeItem ? setIsOpen(true) : setIsOpen(false);
	}, [activeItem]);
	const removeActiveItem = () => {
		setIsOpen(false);
		setTimeout(() => {
			setActiveItem("");
		}, 350);
	};
	return (
		<ModalComponentCSS>
			<div className={"movie-modal" + (isOpen ? " item-selected" : "")}>
				<div className="modal-component__wrapper white-bg">
					{activeItem ? (
						<>
							<div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280${activeItem.backdrop_path}')` }} className="backdrop-header container-fluid py-4 px-5">
								<div className="modal-content">
									<header className="row header-nav">
										<div className="d-flex align-items-center header-left col-6">
											<button
												onClick={() => {
													removeActiveItem();
												}}
												className="close-button white-border transparent-bg white black-hover white-bg-hover"
											>
												&#10005;
											</button>
										</div>
										<div className="d-flex align-items-center justify-content-end header-right col-6 text-end">
											<button
												title="Add to watchlist"
												onClick={() => {
													removeActiveItem();
												}}
												className="bookmark-it transparent-bg border-0"
											></button>
										</div>
									</header>
									<div className="row py-5 text-center text-md-start">
										<div className="col-lg-10 offset-lg-1">
											<div className="row">
												<div className="mx-auto col-4 col-md-4 col-lg-3 position-relative">
													<div className="poster-wrapper">
														<img draggable="false" className="w-100" src={`https://image.tmdb.org/t/p/w500/${activeItem.poster_path}`} alt={activeItem.title} />
													</div>
												</div>
												<div className="mt-4 mt-md-0 ps-md-5 col-md-8 col-lg-9">
													<h2 className="active-item--title fw-bold white">{activeItem.title}</h2>
													<div className="details-bar white" style={{ opacity: 0.75 }}>
														<span className="white year-blip white-border rounded p-2 py-1">{activeItem.release_date.slice(0, 4)}</span>
														<span className="mx-2">|</span>
														{activeItem.genre_names.map((value, i) => (activeItem.genre_names[i + 1] ? <span key={activeItem.genre_ids[i]}>{value}, </span> : <span key={activeItem.genre_ids[i]}>{value} </span>))}
													</div>
													<p className="item--description white">{activeItem.overview}</p>
													<div className="my-4">
														<button className="transparent-bg white-border white rounded p-2 px-3 black-hover white-bg-hover">Watch trailer</button>
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
