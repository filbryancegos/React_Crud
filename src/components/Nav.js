import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<div className="bg-purple-900 py-6">
			<div className="container m-auto">
				<div className="flex justify-between">
					<div className="flex space-x-4">
						<div className="text-white text-base">
							<Link to="/">Home</Link>
						</div>
						<div className="text-white text-base">
							<Link to="/about">About</Link>
						</div>
						<div className="text-white text-base">
							<Link to="/employee">Employee</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
