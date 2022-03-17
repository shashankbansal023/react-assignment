import React from 'react'
import { useNavigate } from 'react-router-dom';

const CustomTable=({headers , columns , rows})=>{

    console.log(headers , columns , rows);
    const navigate = useNavigate();

    function saveUserData(data){
        let user = localStorage.getItem('user');
        if(user){
            localStorage.clear();
        }
        localStorage.setItem ('user' , JSON.stringify(data))
    }


    function handleClick(name,row){
        navigate(`/details/${name}`);
        saveUserData(row);
    }

    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map((header,id)=>{
                            return <th key={id}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(row=>{
                        
                        const {first_name , last_name , age , email ,web} = row;

                        return (
                            <tr>
                                <td onClick={()=>handleClick(first_name , row)}>{first_name}</td>
                                <td>{last_name}</td>
                                <td>{age}</td>
                                <td>{email}</td>
                                <td>
                                    <a href={web} target="_blank"> {web} </a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomTable;