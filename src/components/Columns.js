import React from 'react'
import Column from './Column'

const Columns =({row , columns})=>{
    return (
        <>
            {
                columns.map(col=>
                     <Column row={row} column={col}/>
                )
            }
        </>
    )
}

export default Columns;