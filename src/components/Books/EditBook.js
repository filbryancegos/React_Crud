import React, { useState } from 'react'
import BookHeader from './BookHeader'
import { useParams, useHistory } from 'react-router-dom';
import { useBookContext } from '../../context/Book'

function EditBook() {
	const { id } = useParams();
	let history = useHistory()
	const { books, updateBook } = useBookContext();

	const currentBook = books.find(book => book.id === id)
	const [book, setBook] = useState(currentBook)

	const handleChange = (e) => {
		const { name, value} = e.target
		setBook({...book, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		updateBook(book)
		history.push('/books')
	}
	
	
	return (
		<div className="h-min-screen mt-8">
			<BookHeader />
			<div className="w-1/2 m-auto mt-8">
				<form onSubmit={handleSubmit}>
					<label className="block mb-6">
						<span className="text-gray-700">Book Name</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						value={book.book_name}
						name="book_name"
						onChange={handleChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Book Author</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						value={book.author}
						name="author"
						onChange={handleChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Quantity</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						value={book.quantity}
						name="quantity"
						onChange={handleChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Book Price</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						value={book.price}
						name="price"
						onChange={handleChange}
						/>
					</label>
					<button type="submit" className="bg-purple-500 text-white px-6 py-3 uppercase w-full">Update Book</button>
				</form>
			</div>
		</div>
	)
}

export default EditBook