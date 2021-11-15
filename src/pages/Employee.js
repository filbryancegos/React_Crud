import React from 'react'
import { useEmployeeContext } from '../context/Employee'
import { useHistory } from 'react-router-dom'
import EmployeeList from '../components/Employee/EmployeeList'
import NoRecords from '../components/Employee/NoRecords'


const Employee = () => {
	const history = useHistory()
	const { employees, handleSelectedAll, handleSelectedDelete } = useEmployeeContext()	
	const isChecked = employees.filter(employee => employee.selected);
	return (
		<div className="container m-auto mt-8 h-min-screen">
			<div className="bg-gray-100  overflow-hidden">
				<div className="bg-blue-900 p-4">
					<div className="flex justify-between items-center">
						<h1 className="text-white text-3xl">Manage Employees</h1>
						<div className="flex space-x-4">
							<button disabled={isChecked.length === 0} className={`${isChecked.length > 0 ? 'bg-red-500 hover:bg-yellow-500':'bg-red-900'} p-2 px-8 text-white `} onClick={handleSelectedDelete}>Delete All </button>
							<button onClick={() => history.push(`/add-employee`)} className="bg-green-500 p-2 text-white px-8 hover:bg-blue-500">Add Employees</button>
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
										onChange={handleSelectedAll}
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
							{ employees.length > 0 ? (
								employees.map(employee => 
									<EmployeeList key={employee.id} { ...employee } />
								)
							)
							: (
								<NoRecords colspan={5} error={`No Records Available`} />
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Employee