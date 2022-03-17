import React,{useState,useEffect} from 'react'
import CustomTable from '../components/CustomTable'
import axios from 'axios'

const API = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"

const Home=()=>{

    const [rowsData , setRowsData] = useState([]);
    const [inputValue , setInputValue] = useState('');

    useEffect(() => {
      
        function getUsersData(){
            return axios.request({
                url : API ,
                method :'get'
            })
        }

        getUsersData().then(res=>{
            console.log(res.data);
            setRowsData([...rowsData , ...res.data]);
        }).catch(err=>{
            console.log(err);
        })

    },[])

    const columns = ["first_name" , "last_name" , "age" , "email" , "web"];
    const headers = ["First Name" , "Last Name" , "Age", "Email" , "Web"];
    
    const table = {
        headers,
        columns,
        rows : rowsData
    }

    return (
        <div>
            <input onChange={(e)=>setInputValue(e.target.value)}/>
            <CustomTable {...table}/>
        </div>
    )
}

export default Home;
