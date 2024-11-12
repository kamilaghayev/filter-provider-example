import Filter from '../filter/Filter'
import TableFilter from './TableFilter'

const Table = () => {
	
	return (
		<Filter
			FilterForm={<TableFilter/>}
		>
			<h1>Dashboard page</h1>
			<table>
				<caption>Data Information Summary</caption>
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col">Data 2</th>
						<th scope="col">Data 3</th>
						<th scope="col">Data 3</th>
						<th scope="col">Data 4</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{background: "rgb(43, 43, 253)"}}>
						<td dataLabel="Data 1" style={{fontWeight: "bold"}}>CONTENT 1</td>
						<td dataLabel="Data 2">Content 2</td>
						<td dataLabel="Data 3">Content 3</td>
						<td dataLabel="Data 3">Content 4</td>
						<td dataLabel="Data 4">Content 5</td>
					</tr>
					<tr>
						<td dataLabel="Data 1" style={{fontWeight: "bold"}}>CONTENT 2</td>
						<td dataLabel="Data 2">Content 2</td>
						<td dataLabel="Data 3">Content 3</td>
						<td dataLabel="Data 3">Content 4</td>
						<td dataLabel="Data 4">Content 5</td>
					</tr>
					<tr>
						<td dataLabel="Data 1"style={{fontWeight: "bold"}}>CONTENT 3</td>
						<td dataLabel="Data 2">Content 2</td>
						<td dataLabel="Data 3">Content 3</td>
						<td dataLabel="Data 3">Content 4</td>
						<td dataLabel="Data 4">Content 5</td>
					</tr>
					<tr>
						<td dataLabel="Data 1" style={{fontWeight: "bold"}}>CONTENT 4</td>
						<td dataLabel="Data 2">Content 2</td>
						<td dataLabel="Data 3">Content 3</td>
						<td dataLabel="Data 3">Content 4</td>
						<td dataLabel="Data 4">Content 5</td>
					</tr>
				</tbody>
			</table>
		</Filter>
	)
}

export default Table