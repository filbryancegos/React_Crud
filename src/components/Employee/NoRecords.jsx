import React from 'react'

const NoRecords = ({colspan, error}) => {
	return (
		<tr>
			<td colspan={colspan} className="text-red-500 text-center p-4 border-t border-b">{error}</td>
		</tr>
	)
}

export default NoRecords
