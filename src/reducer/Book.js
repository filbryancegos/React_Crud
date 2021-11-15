const reducer = (state, action) => {
	if (action.type === 'ADD_BOOK') {
		return {
			...state,
			books: [...state.books, action.payload]
		}
	}
	if (action.type === 'DELETE_BOOK') {
		return {
			...state,
			books: state.books.filter(book => book.id !== action.payload)
		}
	}
	if (action.type === 'UPDATE_BOOK') {
		let tempBook = state.books
		.map(book => {
			if (book.id === action.payload.id) {
				const {book_name, author, price , quantity} = action.payload
				return {...book, 
					book_name,
					author,
					price,
					quantity
				}
			}
			return book
		})
		return {
			...state,
			books:tempBook
		}
	}
}

export default reducer