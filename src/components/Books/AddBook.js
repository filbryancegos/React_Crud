import React, { useState } from 'react'
import BookHeader from './BookHeader'
import { useBookContext } from '../../context/Book'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router-dom'

function AddBook() {
	let history = useHistory();
	const { addBook } = useBookContext()

	const initialState = {
		id: nanoid(),
		book_name: '',
		author: '',
		quantity: '',
		price: '',
	}

	const [book, setBook] = useState(initialState)
	const [error, setError] = useState('')
	const { book_name, author, quantity, price } = book;


	const handlChange = (e) => {
		const { name, value } = e.target
		switch (name) {
			case 'quantity':
				if (value === '' || parseInt(value) === +value) {
					setBook((prevState) => ({
						...prevState,
						[name]: value
					}))
				}
				break;
			case 'price':
				if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
					setBook((prevState) => ({
						...prevState,
						[name]: value
					}))
				}
				break;
			default:
				setBook((prevState) => ({
					...prevState,
					[name]: value
				}))
				break;
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const values = [book_name,  author, quantity, price]
		let errorMsg = '';

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});

		if (allFieldsFilled) {
			addBook(book)
			history.push('/books')
		} else {
			errorMsg = 'Please fill out all the fields.';
		}
		setError(errorMsg)
	}

	return (
		<div className="h-min-screen mt-8">
			<BookHeader />
			<div className="w-1/2 m-auto mt-8">
				{error && <p className="text-red-500 text-base font-bold mb-2">{error}</p>}
				<form onSubmit={handleSubmit}>
					<label className="block mb-6">
						<span className="text-gray-700">Book Name</span>
						<input 
						type="text" 
						className="mt-1 block w-full" 
						placeholder=""
						name="book_name"
						onChange={handlChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Book Author</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						name="author"
						onChange={handlChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Quantity</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						name="quantity"
						onChange={handlChange}
						/>
					</label>
					<label className="block mb-6">
						<span className="text-gray-700">Book Price</span>
						<input type="text" className="mt-1 block w-full" placeholder=""
						name="price"
						onChange={handlChange}
						/>
					</label>
					<button className="bg-purple-500 text-white px-6 py-3 uppercase w-full">Add Book</button>
				</form>
			</div>
		</div>
	)
}

export default AddBook