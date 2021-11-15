import React from 'react'
import Search from '../components/Country/Search'
import Dropdown from '../components/Country/Dropdown'
import Card from '../components/Country/Card'
import Loading from '../components/Loading'

import { useGlobalContext } from '../context/Country'

const Country = () => {
	const { countrieslist, loading } = useGlobalContext()
	return (
		<div className="container m-auto mt-8 h-min-screen px-6 ">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
				<Search />
				<div></div>
				<Dropdown />
			</div>
			<div className="mt-12">
				{ loading ? (
					<Loading />
				): (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
						{countrieslist.map((item, index) => 
							<Card key={index} {...item} />
						)}
					</div>
				)}
			</div>
		</div>
		
	)
}

export default Country