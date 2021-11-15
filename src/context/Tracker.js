import React, { useState, useContext, useEffect } from 'react'

const TrackerContext = React.createContext()

const URL = 'https://api.covid19api.com/summary'

const TrackerProvider = ({children}) => {
	const [tracker, setTracker] = useState({
		countries: [],
		loading: false,
		title: 'Global',
		status: {},
		dataDate: 'October 27 2021, 10:24:41 am'
	})

	const getSummary = async () => {
		const response = await fetch(URL);
    	const users = await response.json();

		setTracker({...tracker, 
			status: convertNumber(users.Global),
			countries: users.Countries,
			title: 'Global'
		})
	}

	useEffect(() => {
		getSummary()
	})

	const getCountry = (e) => {
		const {value} = e.target

		if (value === 0) {
			getSummary()
			return
		} 

		const country = tracker.countries.find(count => count.ID === value);

		setTracker({
			...tracker, 
			status: convertNumber(country), 
			title: country.Country, 
			dataDate: country.Date
		})
	}

	const numberWithCommas = (n) => {
		return n.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const convertNumber = (value) => {
		const newCountry = {}

		if (value) {
			Object.keys(value).forEach(e => {
				newCountry[e] = numberWithCommas(value[e])
			})
		}
		
		return newCountry
	}



	return (
		<TrackerContext.Provider
		value={{
			...tracker,
			getCountry
		}}
		>
		{children}
		</TrackerContext.Provider>
	)
}

// make sure use
export const useTrackerContext = () => {
	return useContext(TrackerContext)
  }
  
export { TrackerContext, TrackerProvider }
