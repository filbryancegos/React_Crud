import React from 'react'


const Header = ( { url, title } ) => {
	return (
		<div className="text-center mt-8">
			<h1 className="text-purple-700 text-5xl font-bold">{title}</h1>
			<div className="mt-4">
				<span>API by </span>
				<span><a className="text-purple-300 hover:underline" rel="noreferrer" href={url} target="_blank">{url}</a></span>
			</div>
		</div>
	)
}

export default Header