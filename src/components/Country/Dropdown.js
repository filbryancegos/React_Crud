import React from 'react'
import './country.css'
import { useGlobalContext } from '../../context/Country'

const Dropdown = () => {
	const { getRegion } = useGlobalContext();
	const region = [
		'Africa', 
		'Americas', 
		'Asia', 
		'Europe', 
		'Oceania'
	]
	return (
		<div>
			<label className="block">
				<select onChange={getRegion} className="block w-full custom-dropdown">
					<option value="All">All</option>
					{region.map((item, index) => 
						<option key={index} value={item}>{item}</option>
					)}
				</select>
              </label>
		</div>
	)
}

export default Dropdown