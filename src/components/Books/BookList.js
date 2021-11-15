import React from 'react'
import { useHistory } from 'react-router-dom'
import { useBookContext } from '../../context/Book'

const BookList = ({ id, book_name, author, price, quantity }) => {
	const history = useHistory()
	const { deleteBook } = useBookContext()

	return (
		<div key={id} className="bg-gray-100 p-4 text-black rounded-sm">
			<div>
				<div className="mb-2">Book Name:<span>{book_name}</span></div>
				<div className="mb-2">Author:<span>{author}</span></div>
				<div className="mb-2">Price: <span>{price}</span></div>
				<div className="mb-2">Quantity: <span>{quantity}</span></div>
				<div className="mb-2">Date: <span>{new Date().toDateString()}</span></div>
			</div>
			<div className="space-x-2 mt-4">
				<button onClick={() => history.push(`/books/${id}`)} className="bg-green-500 px-4 text-white rounded-sm py-1">Edit</button>
				<button className="bg-red-500 px-4 text-white rounded-sm py-1" onClick={() => deleteBook(id)}>Delete</button>
			</div>
		</div>
	)
}

export default BookList