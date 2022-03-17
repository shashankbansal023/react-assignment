import React from 'react'
import Columns from './Columns'

const Row=({row , columns})=>{
    return (
            <Columns row={row} columns={columns}/>
    )
}

export default Row;