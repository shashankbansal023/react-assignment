import React, { useState} from 'react'
import {useParams} from 'react-router-dom'

const Details = ()=>{

    
   
    let userData = JSON.parse(localStorage.getItem('user'));
    let keys =  Object.keys(userData);

    return(
        <div>
            <div></div>
            {
                keys.map(key=>{
                    return <tr> {key} : {userData[key]}</tr>
                })
            }
        </div>
    )
}

export default Details


