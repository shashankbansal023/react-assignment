import React from 'react'
import Row from './Row'

const Rows = ({rows , columns})=>{
    return (
        <>
            {
                rows.map(row=>{
                return     <tr>
                         <Row row={row} columns={columns}/>
                     </tr>
                })
            }
        </>
    )
}

export default Rows;