import React from 'react'
import Header from '../components/Pagination/Header'
import Buttons from '../components/Pagination/Buttons'
import Card from '../components/Pagination/Card'
import UseFetch from '../components/Pagination/UseFetch'


const Pagination = () => {
	const { loading, data } = UseFetch();

	console.log(data, loading);
	return (
		<div className="container m-auto mt-8 h-min-screen">
			<Header title="Pagination" />
			<Card />
			<Buttons />
		</div>
	)
}

export default Pagination
