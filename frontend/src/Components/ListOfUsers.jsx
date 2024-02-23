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

    // console.log(data);

  return (
    <>
    <div className='m-5'>
        <table className='border-separate border-spacing-6 border border-slate-500'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
            {
               data !== null &&  data.map((val)=>{
                    return (
                    <tr key={val.id}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.number}</td>
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