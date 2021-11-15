import React from 'react'
import Banner from '../components/Home/Banner'
import Projects from '../components/Home/Projects'

const Home = () => {
	return (
		<div className="h-min-screen">
			<section className="bg-gray-300 py-12 px-6">
				<div className="container m-auto flex items-center justify-center px-3 sm:px-16">
					<Banner title="I'am a Frontend Developer" />
				</div>
			</section>

			<section className="py-12 px-6">
				<div className="container m-auto flex items-center justify-center px-3 sm:px-16">
					<Projects />
				</div>
			</section>
		</div>
	)
}

export default Home