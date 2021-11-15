import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Nav.css'


function Nav() {
	return (
		<div className="bg-purple-900 py-6">
			<div className="container m-auto">
				<div className="flex justify-between">
					<div className="flex space-x-4 nav-menu">
						<div className="text-white text-base">
							<NavLink to="/" className="py-2" exact={true}>Home</NavLink>
						</div>
						<div className="text-white text-base">
							<NavLink to="/about" className="py-2">About</NavLink>
						</div>
						<div className="text-white text-base">
							<NavLink to="/tracker" className="py-2">Covid Tracker</NavLink>
						</div>
						<div className="text-white text-base">
							<NavLink to="/country" className="py-2">Country</NavLink>
						</div>
						<div className="text-white text-base">
							<NavLink to="/books" className="py-2">Book</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
