import React, { useReducer, useContext, useEffect } from 'react'
import reducer from '../reducer/Book'
const BookContext = React.createContext()

const initialBook = JSON.parse(localStorage.getItem('books')) || []

const initialState = {
	books: initialBook
}

const BookProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(state.books))
	}, [state.books])

	const addBook = (data) => {
		dispatch({type: 'ADD_BOOK', payload: data})
	}

	const deleteBook = (id) => {
		dispatch({type: 'DELETE_BOOK', payload: id})
	}

	const updateBook = (payload) => {
		dispatch({type: 'UPDATE_BOOK', payload: payload})
	}

	return (
		<BookContext.Provider
			value={{
				...state,
				addBook,
				deleteBook,
				updateBook	
			}}
		>
			{children}
		</BookContext.Provider>
	)
} 

export const useBookContext = () => {
	return useContext(BookContext)
}

export { BookContext, BookProvider }
