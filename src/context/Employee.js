import React, { useReducer, useContext, useEffect } from 'react'  
import reducer from '../reducer/Employee'
import { 
	REMOVE,
	UPDATE,
	ADD,
	TOOGLE,
	TOOGLEALL,
	DELETE_SELECTED
 } from '../actions/Type'
const EmployeeContext = React.createContext()

const initialEmployee = JSON.parse(localStorage.getItem('employees')) || []

const initialState = {
	employees: initialEmployee,
}

const EmployeeProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	
	useEffect(() => {
		localStorage.setItem('employees', JSON.stringify(state.employees))
	}, [state.employees])

	const removeEmployee = (id) => {
		dispatch({ type: REMOVE, payload: id })
	}

	const updateEmployee = (data) => {
		dispatch({ type: UPDATE, payload: data })
	}

	const addEmployee = (data) => {
		dispatch({ type: ADD, payload: data })
	}

	const handleSelected = (id) => {
		dispatch({ type: TOOGLE, payload: id})
	}

	const handleSelectedAll = (e) => {
		const isCheck = e.target.checked
		dispatch({ type: TOOGLEALL, payload: isCheck})
	}

	const handleSelectedDelete = () => {
		dispatch({ type: DELETE_SELECTED})
	}

	return (
		<EmployeeContext.Provider
		value={{
			...state,
			removeEmployee,
			updateEmployee,
			addEmployee,
			handleSelected,
			handleSelectedAll,
			handleSelectedDelete
		}}
	  >
		{children}
	  </EmployeeContext.Provider>
	)
}

// make sure use
export const useEmployeeContext = () => {
	return useContext(EmployeeContext)
  }
  
export { EmployeeContext, EmployeeProvider }