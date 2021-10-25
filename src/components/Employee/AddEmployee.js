import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useHistory } from "react-router-dom";
import { useGlobalContext } from '../../context/context'

const AddEmployee = () => {
	let history = useHistory();
	const { addEmployee } = useGlobalContext()
	const initialState = {
		id: nanoid(),
		fullname: '',
		email: '',
		address: '',
		phone: ''
	}

	const [employee, setEmployee] = useState(initialState)
	const [errorMsg, setErrorMsg] = useState('')
	const { fullname, email, address, phone } = employee

	const handleSubmit = (e) => {
		e.preventDefault()

		const values = [fullname, email, address, phone];
    	let errorMsg = '';

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});

		if (allFieldsFilled) {
			addEmployee(employee)
			history.push('/employee')
			clearFields()
		} else {
			errorMsg = 'Please fill out all the fields.';
		}
		
	}
	const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setEmployee({...employee, [name]: value})
	}

	const clearFields = () => {
		setEmployee({
			fullname: '',
			email: '',
			address: '',
			phone: ''
		})
	}

	return (
		<div>
			{errorMsg && <p className="text-red-500 text-base">{errorMsg}</p>}
			<form onSubmit={handleSubmit}>
				<label className="block mb-6">
					<span className="text-gray-700">Name</span>
					<input 
					type="text" 
					className="mt-1 block w-full" 
					placeholder=""
					name="fullname"
					value={employee.fullname}
					onChange={handleChange}
					 />
              	</label>
				  <label className="block mb-6">
					<span className="text-gray-700">Email Address</span>
					<input 
					type="email" 
					className="mt-1 block w-full" 
					placeholder=""
					name="email"
					value={employee.email}
					onChange={handleChange}
					 />
              	</label>
				  <label className="block mb-6">
					<span className="text-gray-700">Address</span>
					<input 
					type="text" 
					className="mt-1 block w-full" 
					placeholder=""
					name="address"
					value={employee.address}
					onChange={handleChange}
					/>
              	</label>
				<label className="block mb-6">
					<span className="text-gray-700">Phone</span>
					<input type="text" 
					className="mt-1 block w-full" 
					placeholder="" 
					name="phone"
					value={employee.phone}
					onChange={handleChange}
					/>
				</label>
				<button type="submit" className="bg-purple-900 p-2 text-white  px-16">Add Employee</button>
			</form>
		</div>
	)
}

export default AddEmployee