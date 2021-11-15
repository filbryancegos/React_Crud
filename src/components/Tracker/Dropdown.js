import React from 'react'
import { useTrackerContext } from '../../context/Tracker'

const Country = () => {
	const { countries, getCountry } = useTrackerContext();

	return (
		<div className="text-left mt-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-12">
				<label class="block">
				<span class="text-gray-700 ">Select Country</span>
					<select onChange={getCountry}  class="block w-full mt-1">
						<option value="0">Select Country</option>
						{countries && countries.map(country => 
							<option key={country.ID} value={country.ID}>{country.Country}</option>
						)}
					</select>
				</label>
			</div>			
		</div>
	)
}

export default Country


