// import { useState, useRef, useEffect } from "react";
import "react-router";
import { SliderComponent } from "../../components/shared/SliderComponent/SliderComponent";
import { useState, useEffect } from "react";

const MoviesPage = ({ offset }) => {
	// TMDB API load
	const [movieData, setMovieData] = useState([]);
	useEffect(() => {
		const urls = [
			{
				type: "upcoming",
				url: "https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.asc&api_key=47179f260df8d482f7b4ffd06257a9d1",
			},
			{
				type: "popular",
				url: "https://api.themoviedb.org/3/movie/popular?api_key=47179f260df8d482f7b4ffd06257a9d1",
			},
		];
		const fetchMovieData = async () => {
			let requests = urls.map((item) => fetch(item.url).then((response) => response.json()));
			Promise.all(requests).then((datas) => {
				datas.forEach((data, i) => {
					setMovieData((prevState) => [...prevState, data]);
				});
			});
		};
		fetchMovieData();
	}, []);
	return (
		<>
			<main id="movies" style={{ marginTop: offset }}>
				<SliderComponent category={movieData[0]} items="5" title="Releasing soon" />
				<SliderComponent category={movieData[1]} title="Popular movies" />
			</main>
		</>
	);
};

export default MoviesPage;
