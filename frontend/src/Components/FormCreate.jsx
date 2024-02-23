import React, { useState } from 'react'
import axios from 'axios' ;

const FormCreate = () => {


    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [number,setNumber] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8000/home",{
                name,
                email,
                number
            })
            .then(()=>{
                console.log(`data sent successfully to server`);
            })
            .then((val)=>{
                console.log(val);
            })
    }


  return (
    <>

    <form >

        <label htmlFor="name">name</label>
        <input type="text" id='name' value={name} onChange={(val)=>setName(val.target.value)} name="name" />
        <br />
        <label htmlFor="name">email</label>
        <input type="email" value={email} onChange={(val)=>setEmail(val.target.value)}  id='name' name="name" />
        <br />
        <label htmlFor="name">number</label>
        <input type="number" value={number} onChange={(val)=>setNumber(val.target.value)}  id='name' name="name" />
        <br />
        <button onClick={(e)=>handleSubmit(e)}>Add User</button>


    </form>
    
    </>
  )
}

export default FormCreate;