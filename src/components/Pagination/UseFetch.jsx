import { useState, useEffect} from 'react'
const URL = `https://api.github.com/users/john-smilga/followers?per_page=100`

const UseFetch = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	const getFollowers = async() => {
		const response = await fetch(URL)
		const data = await response.json()
		console.log(data);
		setData(data)
		setLoading(false)
	}

	useEffect(() => {
		getFollowers()
	}, [])

	return (loading, data)
}

export default UseFetch
