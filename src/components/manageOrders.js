import React, { useState } from 'react';
import Navbar from './navbar';
import MaterialTable from 'material-table';

const ordlst = [
    { id: '1 ', cname: 'Kobe Bryant', number: '9321332333', product: 'crocin', qty: '5',total:'200 rs' },
    { id: '2 ', cname: 'Kobe Bryant', number: '9328832333', product: 'eno', qty: '2',total:'20 rs' },
    { id: '3 ', cname: 'dwane Johnson', number: '9321333433', product: 'remdesvir', qty: '10',total:'2000 rs' },
  

]

function ManageOrd()  {
    const [data, setData] = useState(ordlst);

    const columns = [
        { title: 'ID', field: 'id' },
        { title: 'Customer Name', field: 'cname' },
        { title: 'Contact', field: 'number' },
        { title: 'Products', field: 'product' },
        { title: 'Qty', field: 'qty' },
        { title: 'Total', field: 'total' },

    ]

    return (
        <div>
            <Navbar />
            <MaterialTable title="Orders"
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

export default ManageOrd;

