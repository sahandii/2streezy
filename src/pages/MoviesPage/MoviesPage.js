// import { useState, useRef, useEffect } from "react";
import "react-router";
import { SliderComponent } from "../../components/shared/SliderComponent/SliderComponent";
import { ModalComponent } from "../../components/shared/ModalComponent/ModalComponent";
import { useState, useEffect } from "react";

const MoviesPage = ({ activeItem, setActiveItem }) => {
	// TMDB API load
	const [movieData, setMovieData] = useState({});
	useEffect(() => {
		let genres;
		const urls = [
			{
				category: "upcoming",
				url: "https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.asc&api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US",
			},
			{
				category: "popular",
				url: "https://api.themoviedb.org/3/movie/popular?api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US",
			},
			{
				category: "genre",
				url: "https://api.themoviedb.org/3/genre/movie/list?api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US",
			},
			{
				category: "top_rated",
				url: "https://api.themoviedb.org/3/movie/top_rated?api_key=47179f260df8d482f7b4ffd06257a9d1&language=en-US&region=US",
			},
		];
		const fetchMovieData = async () => {
			let requests = urls.map((item) => fetch(item.url).then((response) => response.json()));
			Promise.all(requests).then((datas) => {
				datas.forEach((data, i) => {
					let obj = {};
					let name = urls[i].category;
					obj[name] = data;
					const getGenres = async () => {
						if (data.genres) {
							genres = data.genres;
						}
					};
					getGenres().then((value) => {
						if (data.results) {
							// console.log(data.results);
							data.results.forEach((movie, index, array) => {
								let genreNames = [];
								movie.genre_ids.forEach((genreId, index, array) => {
									for (let i = 0; i < genres.length; i++) {
										const element = genres[i];
										if (genreId === element.id) {
											genreNames.push(element.name);
										}
									}
								});
								movie.genre_names = genreNames;
								// console.log(movie.title, movie.genre_names);
							});
							setMovieData((prevState) => ({
								...prevState,
								...obj,
							}));
						}
					});
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
				<SliderComponent setActiveItem={setActiveItem} category={movieData.top_rated} title="Top rated" />
				<ModalComponent setActiveItem={setActiveItem} activeItem={activeItem} />
			</main>
		</>
	);
};

export default MoviesPage;
