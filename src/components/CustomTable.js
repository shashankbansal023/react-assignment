import React from 'react'
import Rows from './Rows'

const CustomTable=({headers , columns , rows})=>{

    console.log(headers , columns , rows);
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map(header=>{
                            return <th>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <Rows rows={rows} columns={columns}/>
            </tbody>
        </table>
    )
}

export default CustomTable;