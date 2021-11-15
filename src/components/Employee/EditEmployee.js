import React, { useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useEmployeeContext } from '../../context/Employee'



const EditEmployee = () => {
	const { id } = useParams()
	let history = useHistory()
	const { employees, updateEmployee } = useEmployeeContext()
	
	const itemEmployee = employees.find(employee => employee.id === id)
	
	const [employee, setEmployee] = useState(itemEmployee)
	const [errorMsg, setErrorMsg] = useState('')
	const { fullname, email, address, phone } = employee

	

	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name
		setEmployee({...employee, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const values = [fullname, email, address, phone];
    	let errorMsg = '';

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});

		if (allFieldsFilled) {
			updateEmployee(employee)
			history.push('/employee')
			clearFields()
		} else {
			errorMsg = 'Please fill out all the fields.';
		}		
		setErrorMsg(errorMsg);
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
		<div className="w-1/2 m-auto mt-8 h-min-screen">
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
					<input type="text" 
					className="mt-1 block w-full" 
					placeholder=""
					name="email"
					value={employee.email}
					onChange={handleChange}
					 />
              	</label>
				  <label className="block mb-6">
					<span className="text-gray-700">Address</span>
					<input type="text" 
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
				<button type="submit" className="bg-purple-900 p-2 text-white px-16">Update Employee</button>
			</form>
		</div>
	)
}

export default EditEmployee