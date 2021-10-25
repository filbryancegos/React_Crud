import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import { Link } from "react-router-dom";

const Employee = () => {
	const { 
			employees, 
			removeEmployee, 
			tableHeader, 
			currentEmployeeId, 
			handleSelected, 
			handleSelectedAll, 
			handleSelectedDelete  
		} = useGlobalContext()
	
	const handleChange = (id) => {
		handleSelected(id)
	}

	const handleChangeAll = (e) => {
		handleSelectedAll(e.target.checked)
	}
		
	return (
		<div>
			<div className="bg-gray-100 rounded-md overflow-hidden">
				<div className="bg-blue-900 p-4">
					<div className="flex justify-between items-center">
						<h1 className="text-white text-3xl">Manage Employees</h1>
						<div className="flex space-x-4">
							<button className="bg-red-500 p-2 text-white rounded-md" onClick={handleSelectedDelete}>Delete</button>
							<Link to={`/add-employee`}>
								<button className="bg-green-500 p-2 text-white rounded-md">Add Employees</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="p-2">
					<table className="table-auto w-full text-left">
						<thead>
							<tr>
								<th  className="p-4 border-t border-b">
								<div className="flex space-x-4 items-center">
									<span><label>
									<input 
									type="checkbox"
									onChange={handleChangeAll}
									/>
									</label></span>
									<span>Name</span>
								</div>
								</th>
								<th  className="p-4 border-t border-b">Email</th>
								<th  className="p-4 border-t border-b">Address</th>
								<th  className="p-4 border-t border-b">Phone</th>
								<th  className="p-4 border-t border-b text-right">Actions</th>
							</tr>
						</thead>
						<tbody>
							{employees && employees.map((employee, index) => 
								<tr key={index}>
									<td className="p-4 border-t border-b">
										<div className="flex space-x-4 items-center">
											<span><label>
											<input 
											type="checkbox"
											checked={employee.selected}
											onChange={() => handleChange(employee.id)}
											/>
											</label></span>
											<span>{employee.fullname}</span>
										</div>
									</td>
									<td className="p-4 border-t border-b">{employee.email}</td>
									<td className="p-4 border-t border-b">{employee.address}</td>
									<td className="p-4 border-t border-b">{employee.phone}</td>
									<td className="p-4 border-t border-b">
										<div className="flex justify-end space-x-4">
											<button onClick={() => removeEmployee(employee.id)} className="bg-red-500 p-2 text-white rounded-md">Delete</button>
											<Link to={`employee/${employee.id}`} onClick={() => currentEmployeeId(employee.id)} className='btn btn-primary btn-details'>
												<button className="bg-green-500 p-2 text-white rounded-md">Edit</button>
											</Link>
										</div>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
	)
}

export default Employee