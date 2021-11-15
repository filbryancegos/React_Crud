import React from 'react'
import { Link } from 'react-router-dom'

function BookHeader() {
	return (
		<div>
			<h1 className="text-black text-4xl text-center"> Book Management App</h1>
			<div className="mt-8">
				<div className="flex justify-center space-x-4">
					<div className="text-base uppercase font-bold text-purple-500">
						<Link to="/books">Book List</Link>
					</div>
					<div className="text-base uppercase font-bold text-purple-500">
						<Link to="/add-book">Add Book</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookHeader