import React, { useState, useReducer, useContext, useEffect } from 'react'
import data from '../json/employees'
import reducer from './reducer'
const AppContext = React.createContext()


const initialEmployee = JSON.parse(localStorage.getItem('employees')) || []

console.log(initialEmployee);

const initialState = {
	employees: initialEmployee,
	currentId: null,
	tableHeader: [ 'Name', 'Email', 'address', 'phone', 'Actions']
}

const AppProvider = ({ children }) => {	
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(state.employees))
		console.log('amang');
	  }, [state.employees])

	const removeEmployee = (id) => {
		dispatch({ type: 'REMOVE', payload: id })
	}

	const updateEmployee = (data) => {
		dispatch({ type: 'UPDATE', payload: data })
	}

	const currentEmployeeId = (id) => {
		dispatch({ type: 'CURRENT_ID', payload: id })
	}

	const addEmployee = (data) => {
		dispatch({ type: 'ADD', payload: data })
	}

	const handleSelected = (id) => {
		dispatch({ type: 'TOOGLE', payload: id})
	}

	const handleSelectedAll = (value) => {
		console.log(value);
		dispatch({ type: 'TOOGLEALL', payload: value})
	}

	const handleSelectedDelete = () => {
		dispatch({ type: 'DELETE_SELECTED'})
	}

	return (
		<AppContext.Provider
		value={{ 
			...state,
			removeEmployee,
			updateEmployee,
			currentEmployeeId,
			addEmployee,
			handleSelected,
			handleSelectedAll,
			handleSelectedDelete
		}}
	  >
		{children}
	  </AppContext.Provider>
	)
}

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
  }
  
export { AppContext, AppProvider }