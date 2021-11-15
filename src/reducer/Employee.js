import { 
	REMOVE,
	UPDATE,
	CURRENT_ID,
	ADD,
	TOOGLE,
	TOOGLEALL,
	DELETE_SELECTED
 } from '../actions/Type'

const reducer = (state, action) => {
	if (action.type === REMOVE) {
	  return { 
		  ...state, 
		employees: state.employees.filter(employee => employee.id !== action.payload)
		}
	}
	if (action.type === UPDATE) {
		const { id, fullname, email, address, phone } = action.payload
		let tempEmployee = state.employees
		.map(employee => {
			if (employee.id === id) {
				return {
					...employee,
					fullname,
					email,
					address,
					phone
				}
			}
			return employee
		})
		return {
			...state,
			employees:tempEmployee 
		}
	}

	if (action.type === CURRENT_ID) {
		return {
			...state,
			currentId: action.payload
		}
	}

	if (action.type === ADD) {
		return {
			...state,
			employees: [...state.employees , action.payload]
		}
	}

	if (action.type === TOOGLE) {
		let tempEmployee = state.employees
		.map(employee => {
			if (employee.id === action.payload) {
				return {...employee, selected: !employee.selected}
			}
			return employee
		})

		return {
			...state,
			employees: tempEmployee
		}
	}

	if (action.type === TOOGLEALL) {
		let tempEmployee = state.employees
		.map(employee => {
			if (action.payload) {
				return { ...employee, selected: true}
			} else {
				return { ...employee, selected: false}
			}

			//return employee
		})

		return {
			...state,
			employees: tempEmployee
		}
	}

	if (action.type === DELETE_SELECTED) {
		return { 
			...state, 
		  employees: state.employees.filter(employee => employee.selected !== true)
		  }
	}
  }
  
  export default reducer
  