import React from 'react'

const Header = ({title}) => {
	return (
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-purple-700 text-5xl font-bold">{title}</h1>
			<div class="h-1 bg-yellow-500 w-24 mt-3"></div>
		</div>
	)
}

export default Header
