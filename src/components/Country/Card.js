import React from 'react'
import './country.css'
import { useHistory } from "react-router-dom";

const Card = ({ id, flags, population, region, capital, name }) => {

	const history = useHistory()

	return (
		<div onClick={() => history.push(`/country/${name.official}`)} className="bg-white border border-purple-900 overflow-hidden cursor-pointer rounded-md">
			<img src={flags.png} alt="" className="w-full h-48" />
			<div className="p-4 px-6">
				<h1 className="text-black text-2xl font-bold py-2">{name.official}</h1>
				<p><span>Population:</span><span>{population}</span></p>
				<p><span>Region:</span><span>{region}</span></p>
				<p><span>Capital:</span><span>{capital}</span></p>
			</div>
		</div>
	)
}

export default Card