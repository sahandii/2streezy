// import { useState, useRef, useEffect } from "react";
import "react-router";
import { SliderComponent } from "../../components/shared/SliderComponent/SliderComponent";
import { ModalComponent } from "../../components/shared/ModalComponent/ModalComponent";
import { useState, useEffect } from "react";

const MoviesPage = ({ activeItem, setActiveItem }) => {
	// TMDB API load
	const [movieData, setMovieData] = useState({});
	useEffect(() => {
		const urls = [
			{
				category: "upcoming",
				url: "https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.asc&api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US",
			},
			{
				category: "popular",
				url: "https://api.themoviedb.org/3/movie/popular?api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US",
			},
		];
		const fetchMovieData = async () => {
			let requests = urls.map((item) => fetch(item.url).then((response) => response.json()));
			Promise.all(requests).then((datas) => {
				datas.forEach((data, i) => {
					const obj = {};
					let name = urls[i].category;
					obj[name] = data;
					setMovieData((prevState) => ({
						...prevState,
						...obj,
					}));
				});
			});
		};
		fetchMovieData();
	}, []);
	return (
		<>
			<main id="movies">
				<SliderComponent setActiveItem={setActiveItem} category={movieData.upcoming} title="Releasing soon" />
				<SliderComponent setActiveItem={setActiveItem} category={movieData.popular} title="Popular movies" />
				<ModalComponent setActiveItem={setActiveItem} activeItem={activeItem} />
			</main>
		</>
	);
};

export default MoviesPage;
