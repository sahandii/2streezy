import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SplideCSS } from "./styled";
import { ReactComponent as ArrowRight } from "./img/arrow.svg";

export function SliderComponent({ category, items, title }) {
	return (
		<SplideCSS className="mt-4">
			<div className="container">
				<h4 className="fw-light category-label pt-4 pb-3">{title}</h4>
			</div>
			<Splide
				options={{
					keyboard: "focused",
					isNavigation: true,
					// type: "loop",
					gap: "0",
					autoplay: false,
					rewind: true,
					updateOnMove: true,
					pagination: false,
				}}
			>
				{category
					? category.results.slice(0, items).map((item, index, array) => (
							<SplideSlide key={"slide-" + index} className="">
								<div className="splide__slide--container position-relative h-100">
									{/* <div className="container">
										<div className="splide__slide--description row">
											<div className="col-11 mx-auto d-flex">
												<div className="col-2">
													<img src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} className="image-poster w-100 rounded" alt="" />
												</div>
												<div className="ps-4 col-7">
													<h2 className="fs-1 white fw-bold d-inline-flex align-items-center">
														{item.original_title}{" "}
														<span style={{ lineHeight: "initial", marginTop: "5px", opacity: ".8" }} className="white-border p-1 px-2 rounded ms-3 fs-6 fw-normal">
															{item.release_date.slice(0, 4)}
														</span>
													</h2>
													<h6 className="white fw-normal">{item.overview}</h6>
													<button className="mt-4 px-4 btn btn-primary border-0 skyblue-bg white white-bg-hover skyblue-hover">Stream now</button>
													<button className="ms-3 mt-4 px-4 btn btn-outline-light">Watch later</button>
												</div>
											</div>
										</div>
									</div> */}
									<div className="title--bar position-absolute bottom-0 zi-1 w-100">
										<div className="title--container d-flex justify-content-between align-items-center">
											<h6 className="title fw-normal white m-0 mt-1">
												{item.original_title} <span className="year-blip white-border rounded p-1 ms-1">{item.release_date.slice(0, 4)}</span>
											</h6>
											<ArrowRight width="15" height="auto" />
										</div>
									</div>
									<div className="backdrop-wrapper ratio ratio-16x9">
										<img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt={item.original_title} />
										<img className="backdrop-blurred" src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt={item.original_title} />
									</div>
								</div>
							</SplideSlide>
					  ))
					: ""}
			</Splide>
		</SplideCSS>
	);
}
