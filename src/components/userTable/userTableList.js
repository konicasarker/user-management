import React from "react";
import './style.css'
import ReactTable from './table';
import { useHistory } from "react-router-dom";



function UserTableList(props) {

let history = useHistory();
// const [deleteFlag, setDeleteFlag] = useState(false);

const handleEdit = (row) =>{
    history.push({
        pathname: `/editUser`,
        state: { data: JSON.stringify(row) }
    });
}
    

const columns = React.useMemo(
() => [
{
    Header: 'User Name',
    columns: [
        {
            Header: 'Name',
            accessor: 'username',
        },
        {
            Header: 'Address',
            accessor: 'address',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
    ],
},
{
    Header: 'User Role',
    columns: [
        {
            Header: 'Role',
            accessor: 'role',
        },
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'edit/delete',
            Cell: ({row}) => (
                <div>
                    <button onClick={() => handleEdit(row.original)}>Edit</button>
                    <button onClick={() => props.handleDelete(row.original)}>Delete</button>
                </div>
            )
        },
    ],
},
],
[]
)

    return (<> 
        <br />
        <br />
        <h3> List of Users </h3>
        <ReactTable columns={columns} data={props.users}/>
    </>)
}
  
  export default UserTableList;