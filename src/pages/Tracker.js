import React from 'react'
import Header from '../components/Tracker/Header'
import Title from '../components/Tracker/Title'
import Card from '../components/Tracker/Card'
import Country from '../components/Tracker/Dropdown'

const Tracker = () => {
	const URL = 'https://covid19api.com'
	const TITLE = 'Covid-19 Tracker'
	
	return (
		<div className="text-center mt-8 container m-auto h-screen">
			<Header url={URL} title={TITLE} />
			<Title />
			<Card />
			<Country />
		</div>
	)
}

export default Tracker