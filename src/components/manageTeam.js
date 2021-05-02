import React, { useState } from 'react';
import Navbar from './navbar';
import MaterialTable from 'material-table';

const teamlst = [
    { fname: 'Sam ', lname: 'sood', dob: '06-02-1990', gender: 'M', exp: '5 yrs' },
    { fname: 'Ram ', lname: 'saod', dob: '08-07-1993', gender: 'M', exp: '3 yrs' },
    { fname: 'Chuck ', lname: 'Norris', dob: '01-05-1995', gender: 'M', exp: '2 yrs' },

]

function ManageTeam()  {
    const [data, setData] = useState(teamlst);

    const columns = [
        { title: 'First Name', field: 'fname' },
        { title: 'Last Name', field: 'lname' },
        { title: 'D.O.B', field: 'dob' },
        { title: 'Dender', field: 'gender' },
        { title: 'Experience', field: 'exp' },

    ]

    return (
        <div>
            <Navbar />
            <MaterialTable title="Team"
                data={data}
                columns={columns}
                options={{
                    paging: false,
                    actionsColumnIndex: -1, addRowPosition: "first"
                }}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        const updatedRows = [...data, newRow]
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 1500)
                    }),
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows.splice(index, 1)
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 1500)
                    }),
                    onRowUpdate:( updatedRow,oldRow) => new Promise((resolve, reject) => {
                        const index = oldRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows[index]=updatedRow
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 1500)
                    })
                    
                }}
            />
        </div>
    );
}

export default ManageTeam;

