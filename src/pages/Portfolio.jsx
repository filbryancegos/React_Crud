import React, {useState,useEffect} from 'react'
import data from '../components/Portfolio/Data'
const allCategories = ['all', ...new Set(data.map(cat => cat.category))]


const Portfolio = () => {
	const [menuItems, setMenuItems] = useState(data)
	const [categories, setCategories] = useState([])
	const [activeMenu, setActiveMenu] = useState('all')

	useEffect(() => {
		setCategories(allCategories)
	}, [])

	const filterMenu = (category) => {
		if (category === 'all') {
			setMenuItems(data)
			setActiveMenu('all')
			return;
		}
		const newMenuItems = data.filter(menu => menu.category === category)
		setMenuItems(newMenuItems)
		setActiveMenu(category)		
	}

	
	return (
		<div className="container m-auto mt-8 h-min-screen px-6">
			<div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
				<div className="col-span-1">
					<div>
						{categories && categories.map((cat, index) => 
							<div key={index} onClick={() => filterMenu(cat)} className={`capitalize py-2 cursor-pointer ${activeMenu === cat ? 'border-b-2 border-yellow-300': '' }`}>{cat}</div>
						)}
					</div>
				</div>
				<div className="col-span-1 sm:col-span-3">
					<div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
						{menuItems && menuItems.map(item => 
							<div key={item.id}>
								<img src={item.img} alt="" />
								<h1 className="text-center pt-3">{item.title}</h1>
							</div>	
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
