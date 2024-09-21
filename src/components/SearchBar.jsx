import "../App.css";
import React from "react";


const SearchBar = ({searchTerm, setSearchTerm, handleSearch}) => {
	return (
		<>
			<div className='search'>
				<input type='text' className='search' placeholder='Enter city name' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
				<button className='search-btn' onClick={handleSearch}>
					<i className='ri-search-line'></i>
				</button>
			</div>
		</>
	);
};

export default SearchBar;
