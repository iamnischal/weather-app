import React, { useState } from "react";
import "../App.css";

function getDate() {
	const today = new Date();

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = today.toLocaleDateString("en-US", options);
	return formattedDate;
}

function DetailArea({ data }) {
	const currentDate = getDate();
	return (
		<>
			<div className='texts'>
				<h1 className='location'>
					{data.location.name}, {data.location.country}
				</h1>
				<p className='date'>
					<i>{currentDate}</i>
				</p>
				<div className='temp'>
					<img src={data.current.condition.icon} alt={data.current.condition.text} />
					<h1 className='tempNum'>
						{data.current.temp_c}
						<span>
							<sup>°C | °F</sup>
						</span>
					</h1>
				</div>
				<p className='condition'>{data.current.condition.text}</p>
				<div className='windCondition'>
					<div className='speed'>
						<i className='ri-cloud-windy-line'></i>
						<p className='windSpeed'>
							{data.current.wind_mph} m/h <br />
							Wind Speed
						</p>
					</div>
					<div className='water'>
						<i className='ri-cloudy-line'></i>
						<p className='humidity'>
							{data.current.humidity}%
							<br />
							Humidity
						</p>
					</div>
				</div>
				<h4 className='day'>3-Day Forecast:</h4>
			</div>
		</>
	);
}

export default DetailArea;
