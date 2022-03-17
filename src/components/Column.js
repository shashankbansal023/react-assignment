import React from 'react'

const Column =({row , column})=>{

    return (
        <td>
            {
                column==="web" ? <a href={row[column]} target="_blank">{row[column]}</a> : row[column]
            }
        </td>
    )
}

export default Column