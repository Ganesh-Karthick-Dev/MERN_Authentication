import React, { useState } from 'react'
import axios from 'axios' ;

const FormCreate = () => {


    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [number,setNumber] = useState(null);
    const [notvalidate,setNotValidate] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            number
        }

        if((name && email && number )=== null){
            setNotValidate(!notvalidate)
        }
        else{
            axios
                .post("http://localhost:8000/api/workout",data)
                .then(()=>{
                    console.log(`data sent successfully to server`);
                })
                .then(()=>{
                    
                })
            setName("")
            setEmail("")
            setNumber("")

            return window.location.reload()
        }

    }


  return (
    <>

    <div className=' my-6 md:my-0 md:mx-0 mx-4  order-first md:order-last'>
    <form className=''>
        <h1 className='text-black font-extrabold text-2xl mb-3'>Add a new Workout</h1>

        <label className='text-xs font-semibold' htmlFor="name">Excersize Title:</label> <br />
        <input className=' border-slate-300 rounded-sm border my-2 w-full' type="text" id='name' value={name} onChange={(val)=>setName(val.target.value)} name="name" />
        <br />
        <label className='text-xs font-semibold' htmlFor="name">Load (in kg):</label> <br />
        <input className='border-slate-300 rounded-sm border my-2 w-full' type="number" value={email} onChange={(val)=>setEmail(val.target.value)}  id='name' name="name" />
        <br />
        <label className='text-xs font-semibold' htmlFor="name">Reps:</label> <br />
        <input className='border-slate-300 rounded-sm border mt-2 w-full' type="number" value={number} onChange={(val)=>setNumber(val.target.value)}  id='name' name="name" />
        <br />
        <button className=' hover:bg-emerald-700 bg-emerald-500 mt-4 text-xs px-3 py-2 text-white rounded-md' onClick={(e)=>handleSubmit(e)}>Add Workout</button>

    </form>
    {
        notvalidate && (
            <p className=' mt-3 text-red-500 text-xs'>All fields are required *</p>
        )
    }
    </div>
    </>
  )
}

export default FormCreate;