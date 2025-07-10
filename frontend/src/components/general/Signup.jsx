<<<<<<< HEAD
import React from 'react'

const Signup = () => {
  return (
    <div>    <form action="">
        
    <input type="name" name="name" id="name" placeholder='Your Name' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />

   <input type="email" name="email" id="email" placeholder='Your Email' className='border border-gray-500 w-full p-2 rounded-lg my-2' /><br />
  
   <input type="Password" name="Password" id="Password" placeholder='Password' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />
   <input type="submit" value="Create Account " className='px-4 py-2 bg-primary-color w-full text-white rounded-lg'/>
</form></div>
=======
import React, { useContext, useState } from 'react'
import {  toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

// import 'react-toastify/dist/ReactToastify.css';

const Signup = ({setShowPop,setView}) => {
  
   const {url,setToken} = useContext(StoreContext)
  const [data,setData] = useState({
    name:"",
      email:"",
      password:""
    });
  
    const onChangeHandler =(event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name]:value}));
    }

    const onSignUp = async (event)=>{
      event.preventDefault();
        
        const response = await axios.post(`${url}/api/user/register`,data)
        
        if(response.data.success){
          toast.success("Signup successful!");
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          setShowPop('login')
          setView('login')

        }
        else{
          toast.error(response.data.message || "Signup failed!");
          alert(response.data.message)
        }
    }

  return (
    <div>    <form onSubmit={onSignUp}>
        
    <input type="name" name="name" id="name" placeholder='Your Name' onChange={onChangeHandler} className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />

   <input type="email" name="email" id="email" placeholder='Your Email' onChange={onChangeHandler} className='border border-gray-500 w-full p-2 rounded-lg my-2' /><br />
  
   <input type="password" name="password" id="password" onChange={onChangeHandler} placeholder='password' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />
   <input type="submit" value="Create Account " className='px-4 py-2 bg-primary-color w-full text-white rounded-lg'/>
</form>
{/* <ToastContainer /> */}
</div>
>>>>>>> feffc19 (Feat)
  )
}

export default Signup