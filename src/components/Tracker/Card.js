import React from 'react'
import { useTrackerContext } from '../../context/Tracker'
const Card = () => {

	const { status } = useTrackerContext();
	
	return (
		<div className="text-center mt-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
				<div className="text center bg-purple-100 rounded-md p-12">
					<div className="text-purple-500 text-3xl font-bold">Cases</div>
					<div className="mt-4">
						<span className="text-black font-bold text-2xl">New: </span>
						<span className="text-black font-normal text-2xl">{status.NewConfirmed}</span>
					</div>
					<div className="mt-4">
						<span className="text-black font-bold text-2xl">Total: </span>
						<span className="text-black font-normal text-2xl">{status.TotalConfirmed}</span>
					</div>
				</div>
				<div className="text center bg-purple-100 rounded-md p-12">
					<div className="text-purple-500 text-3xl font-bold">Deaths</div>
					<div className="mt-4">
						<span className="text-black font-bold text-2xl">New: </span>
						<span className="text-black font-normal text-2xl">{status.NewDeaths}</span>
					</div>
					<div className="mt-4">
						<span className="text-black font-bold text-2xl">Total: </span>
						<span className="text-black font-normal text-2xl">{status.TotalDeaths}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card