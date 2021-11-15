import React from 'react'
import { useEmployeeContext } from '../../context/Employee'
import { useHistory } from 'react-router-dom'
const EmployeeList = ({id, email, address, phone, fullname, selected}) => {

	const history = useHistory()
	const { removeEmployee,  handleSelected } = useEmployeeContext()

	return (
		<tr>
			<td className="p-4 border-t border-b">
				<div className="flex space-x-4 items-center">
					<span><label>
					<input 
					type="checkbox"
					checked={selected}
					onChange={() => handleSelected(id)}
					/>
					</label></span>
					<span>{fullname}</span>
				</div>
			</td>
			<td className="p-4 border-t border-b">{email}</td>
			<td className="p-4 border-t border-b">{address}</td>
			<td className="p-4 border-t border-b">{phone}</td>
			<td className="p-4 border-t border-b">
				<div className="flex justify-end space-x-4">
					<button onClick={() => removeEmployee(id)} className="bg-red-500 p-2 px-8 text-white hover:bg-yellow-500">Delete</button>
					<button onClick={() => history.push(`/employee/${id}`)} className="bg-green-500 p-2 px-8 text-white hover:bg-blue-500">Edit</button>
				</div>
			</td>
		</tr>
	)
}

export default EmployeeList