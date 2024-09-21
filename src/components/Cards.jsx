import "../App.css";

const Cards = ({ day }) => {
	const getDay = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleString("default", { weekday: "short" });
	};
	return (
		<>
			<div className='cont'>
				<p className='day'>{getDay(day.date)}</p>
				<img src={day.day.condition.icon} alt={day.day.condition.text} />
				<p className='tmp'>
					{day.day.mintemp_c}
					<sup>°</sup>/{day.day.maxtemp_c}
					<sup>°</sup>
				</p>
			</div>
		</>
	);
};

export default Cards;
