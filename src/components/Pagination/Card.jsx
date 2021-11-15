import React from 'react'
import  Image from '../../images/book.png'

const Card = () => {
	return (
		<div className="border-b">
			<div className="flex items-center justify-between py-4">
				<div className="flex items-center space-x-4">
					<img className="w-16 h-16 rounded-full shadow-lg" src={Image} alt="" />
					<h1 className="text-black text-base">Fil Bryan</h1>
				</div>
				<div>
					<button className="bg-yellow-500 px-6 rounded-sm text-white">view</button>
				</div>
			</div>
		</div>
	)
}

export default Card
