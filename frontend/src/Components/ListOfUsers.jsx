import React, { useEffect, useState } from 'react'
import axios from 'axios';



const ListOfUsers = () => {

    const [data,setData] = useState(null)


    useEffect(()=>{

        axios.get("http://localhost:8000/read")
        .then((val)=>{
            // console.log(val.data);
            setData(val.data)
        })

    },[])


    const handleDelete = (val) => {
        let {_id} = val
        axios
            .delete(`http://localhost:8000/delete${_id}`)
            .then(()=>{
                console.log(`delete id successfully sent to server`);
            })
            .catch((err)=>console.log(`error while sent id to server as deleting request - ${err}`))
    }


  return (
    <>
    <div className='m-5'>
        <table className='border-separate border-spacing-6 border border-slate-500'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Actions</th>
            </tr>
            {
               data !== null &&  data.map((val)=>{
                    return (
                    <tr key={val.id}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.number}</td>
                        <td><button onClick={()=>handleDelete(val)} className='bg-lime-500 hover:bg-lime-600 p-2 rounded-md text-white'>Delete</button></td>
                    </tr>
                    )
                })
            }
        </table>
        
    </div>
    </>
  )
}

export default ListOfUsers;