import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getCountryName } from '../../service/api';

const SingelCoungry = () => {
	const { id } = useParams()
	const [country, setCountry] = useState({
		countryDetails: {},
	})
	
	const getCountryEking = async () => {
		const response = await getCountryName(id);
		setCountry({...country, countryDetails: response.data[0] })
	}

	useEffect(() => {
		getCountryEking()
	})

	const { flags, population, region, capital, name } = country.countryDetails;
	return (
		<div>
			<div className="bg-white border border-purple-900 overflow-hidden w-1/2 m-auto p-6">
				<div>
					{flags && <img src={flags.png} alt="" className="w-full" />}
				</div>
				<div className="text-left">
					{name && <h1 className="text-black text-2xl font-bold py-2">{name.official}</h1>}
					
					<p className="py-2"><span>Population: </span><span className="font-bold">{population}</span></p>
					<p className="py-2"><span>Region: </span><span className="font-bold">{region}</span></p>
					<p className="py-2"><span>Capital: </span><span className="font-bold">{capital}</span></p>
				</div>
			</div>
		</div>
	)
}

export default SingelCoungry