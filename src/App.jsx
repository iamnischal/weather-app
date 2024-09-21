import "./App.css";
import SearchBar from "./components/SearchBar";
import DetailArea from "./components/DetailArea";
import Cards from "./components/Cards";
import React, { useState, useEffect } from "react";

const App = () => {
	const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
	const [loading, setLoading] = useState(false);
	const [weatherData, setWeatherData] = useState(null); // State to hold the fetched weather data
	const [error, setError] = useState(null);
	const [searchTriggered, setSearchTriggered] = useState(false); // State to trigger details update
	const apiKey = "a66c1758925b4294a64121310221512 ";

	const fetchData = async (city) => {
		const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no`;
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(apiUrl);
			if (!response.ok) {
				throw new Error("Failed to fetch weather data");
			}
			const data = await response.json();
			setSearchTriggered(true);
			setWeatherData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};
	const handleSearch = async () => {
		setSearchTriggered(true);
		await fetchData(searchTerm);
	};
	useEffect(() => {
		const defaultCity = "Pokhara";
		fetchData(defaultCity); // Fetch weather data for the default city
	}, []);
	useEffect(() => {}, [weatherData]);

	const forecast = weatherData && weatherData.forecast.forecastday;

	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				handleSearch={handleSearch}
			/>
			{/* Show loading spinner or error message if applicable */}
			{loading && (
				<div className='loader'>
					<h1>Loading...</h1>
				</div>
			)}
			{error && <p>Error: {error}</p>}

			{searchTriggered && <DetailArea data={weatherData} />}
			<div className='flex'>
				{weatherData &&
					forecast.map((day, index) => {
						// console.log(index);
						return <Cards key={index} day={day} />;
					})}
			</div>
		</>
	);
};

export default App;
