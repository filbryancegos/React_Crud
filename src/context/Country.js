import React, { useState, useContext, useEffect } from 'react'

import { getCountries, getCountryByRegion } from '../service/api';

const AppContext = React.createContext()

const initialCountry = []

const AppProvider = ({ children }) => {	

	const [countrieslist, setCountries] = useState(initialCountry)
	const [region, setRegion] = useState('All')
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (region === 'All') {
			getAllCountries()
		} else {
			getByRegion(region)
		}
	}, [region])
	
	//countries
	const getAllCountries = async () => {
		setLoading(true)
		const response = await getCountries();
		setCountries(response.data)
		localStorage.setItem('allCountries', JSON.stringify(response.data))
		setLoading(false)
	}

	// get by region
	const getByRegion = async (id) => {
		setLoading(true)
		const response = await getCountryByRegion(id);
		setCountries(response.data)
		localStorage.setItem('allCountries', JSON.stringify(response.data))
		setLoading(false)
	}

	const getRegion = (e) => {
		const { value } = e.target
		setRegion(value)
	}

	const handleSearch = (e) => {
		const { value } = e.target
		if (value !== '') {
			setQuery(value)
			getByName(query)
		} else {
			getAllCountries()
		}
	}

	const handleEnter = (e) => {
		const { key } = e
		if (key === "Enter" && query) {
			getByName(query)
		}
	}

	const getByName = (query) => {
		query = query
		.toLowerCase()
		.trim()
		.normalize("NFD")
      	.replace(/[\u0300-\u036f]/g, "");
		const filteredData = countrieslist.filter(country => country.name.common.toLowerCase().includes(query));
		setCountries(filteredData)		
	}

	return (
		<AppContext.Provider
		value={{ 
			countrieslist,
			getRegion,
			handleSearch,
			handleEnter,
			loading
		}}
	  >
		{children}
	  </AppContext.Provider>
	)
}

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
  }
  
export { AppContext, AppProvider }