import React from 'react'

const Header = ({title}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-purple-700 text-5xl font-bold">{title}</h1>
			<div className="h-1 bg-yellow-500 w-24 mt-3"></div>
		</div>
	)
}

export default Header
