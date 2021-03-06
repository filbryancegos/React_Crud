import React from 'react'
import BookHeader from '../components/Books/BookHeader'
import BookList from '../components/Books/BookList'
import { useBookContext } from '../context/Book'

function Books() {
	const { books } = useBookContext()
	return (
		<div className="container m-auto mt-8 h-min-screen px-6">
			<BookHeader />
			<div className="mt-8">
				<div className={` grid ${books.length === 0 ? 'grid-cols-1' : 'lg:grid-cols-4 gap-4' } `}>
					{ books.length > 0 ? ( books.map(item => 
						<BookList key={item.id} { ...item } />
						)
						):
						(
							<div className="text-red-500 text-base text-center font-bold uppercase">No books Available</div>
						)	
					}
				</div>
			</div>
		</div>
	)
}

export default Books
