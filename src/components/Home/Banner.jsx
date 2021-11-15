import React from 'react'
import Image from '../../images/bryan.png'

const Banner = ({title}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
			<div className="flex justify-center flex-col">
				<p className="text-yellow-600 text-lg uppercase">get every single solutions</p>
				<h1 className="text-5xl text-purple-800 uppercase">
					{title}
				</h1>
				<p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores et quisquam tempora voluptatem reprehenderit, quibusdam autem enim, eligendi delectus aliquid repellat libero aperiam, incidunt nesciunt ut praesentium eveniet cupiditate.</p>
				<div className="mt-8 flex space-x-0 sm:space-x-2">
					<button className="bg-yellow-500 hover:bg-yellow-600 px-12 py-3 uppercase text-white">Learn More</button>
					<button className="bg-purple-500 hover:bg-purple-600 px-12 py-3 uppercase text-white">Hire Me</button>
				</div>
			</div>
			<div>
				<img src={Image} alt="profile pic" />
			</div>
		</div>
	)
}

export default Banner
