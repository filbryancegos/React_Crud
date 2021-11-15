import React from 'react'
import { useTrackerContext } from '../../context/Tracker'
import Moment from 'react-moment';

const Title = () => {
	const { dataDate, title } = useTrackerContext()
	
	return (
		<div className="text-center mt-8">
			<h1 className="text-4xl text-black font-bold">{title}</h1>
			<div className="mt-4">
				<span className="text-2xl font-bold text-green-600">
				<Moment format="D MMM YYYY" withTitle>
               	 	{dataDate}
           		 </Moment>
				</span>
			</div>
		</div>
	)
}

export default Title