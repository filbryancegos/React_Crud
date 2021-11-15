import React from 'react'

const Buttons = () => {
	return (
		<div className="flex justify-center items-center space-x-2 w-full mt-8">
			<button className="text-purple-500 font-bold">Next</button>
			<div className="flex justify-start items-center space-x-2">
				<button className="bg-yellow-400 px-4 py-1 text-white rounded-sm">1</button>
				<button className="bg-yellow-400 px-4 py-1 text-white rounded-sm">2</button>
			</div>
			<button className="text-purple-500 font-bold">Prev</button>
		</div>
	)
}

export default Buttons
