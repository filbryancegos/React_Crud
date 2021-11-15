import React from 'react'
import './country.css'
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from '../../context/Country'

const Search = () => {
	const { handleSearch, handleEnter } = useGlobalContext();

	return (
		<div className="search-box">
			<FiSearch className="absolute text-2xl h-full left-0.5" />
			<input onChange={handleSearch} onKeyUp={handleEnter} type="text" />
		</div>
	)
}

export default Search