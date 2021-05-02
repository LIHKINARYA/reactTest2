import React, { useState } from 'react';
import Navbar from './navbar';
import MaterialTable from 'material-table';

const medlst = [
    { name: 'Crocin', ManufacName: 'sda', price: '200 Rs', stock: '20', discount: '10%' },
    { name: 'Remedsvir', ManufacName: 'abc', price: '500 Rs', stock: '120', discount: '10%' },
    { name: 'Eno', ManufacName: 'xyz', price: '20 Rs', stock: '50', discount: '10%' },

]

function ManageMed()  {
    const [data, setData] = useState(medlst);

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Manufacturer Name', field: 'ManufacName' },
        { title: 'Price', field: 'price' },
        { title: 'Stock', field: 'stock' },
        { title: 'Discount', field: 'discount' },

    ]

    return (
        <div>
            <Navbar />
            <MaterialTable title="Medicine"
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

export default ManageMed;

