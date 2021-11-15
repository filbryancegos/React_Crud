import React from 'react'
import {data} from '../../json/project'
import { useHistory } from 'react-router-dom'
const Projects = () => {
	const history = useHistory()
	return (
		<div>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-purple-500 text-4xl uppercase">Projects</h1>
				<div className="h-1 bg-yellow-500 w-24 mt-3"></div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
				{data ? (
					data.map(item => 
						<div key={item.id} className="bg-white shadow-md border overflow-hidden rounded-lg pb-12">
							<img className="cursor-pointer" onClick={() => history.push(`/${item.link}`)} src={item.image} alt="" />
							<div className="mt-4 flex flex-col items-center justify-center px-6">
								<h1 className="text-lg mt-4 uppercase text-purple-500">{item.title}</h1>
								<div className="mt-6 flex space-x-4">
									{
										item.tags.map((btn, index) => 
											<span key={index} className="bg-yellow-500 hover:bg-yellow-900 text-white rounded-lg px-6 py-1 text-sm cursor-pointer">{btn}</span>
										)
									}
								</div>
							</div>
						</div>
					)
				)
				: 
				(
					<div>no data</div>
				)}
				
			</div>
			
		</div>
	)
}

export default Projects


