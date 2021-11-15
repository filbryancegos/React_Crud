import axios from 'axios';

const URL = 'https://restcountries.com/v3.1';

const getCountries = async (param) => {
	return await axios.get(`${URL}/all`)
}

const getCountryName = async (id) => {
	return await axios.get(`${URL}/name/${id}`)
}

const getCountryByRegion = async (id) => {
	return await axios.get(`${URL}/region/${id}`)
}

const getCountryByName = async (id) => {
	return await axios.get(`${URL}/name/${id}`)
}

export { 
	getCountries,
	getCountryName,
	getCountryByRegion,
	getCountryByName
}