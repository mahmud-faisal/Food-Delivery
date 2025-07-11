import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import {  toast } from 'react-toastify';


const Login = ({setShowPop}) => {
  
  const {url,setToken} = useContext(StoreContext)

  const [data,setData] = useState({
    email:"",
    password:""
  })

  const onChangeHandler =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}));
  }

  const onLogin = async(event)=>{
    event.preventDefault();
    

    const response = await axios.post(`${url}/api/user/login`,data)

    if(response.data.success){
      // toast.success("Sign in successful!");
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowPop(false);
      console.log("Success");
    }
    else{
       toast.error(response.data.message || "Signup failed!");
      alert(response.data.message)
    }
  }



  return (

    <form  onSubmit={onLogin}>
        <input type="email" name="email" id="email" placeholder='Your Email' onChange={onChangeHandler} className='border border-gray-500 w-full p-2 rounded-lg my-2' /><br />
       
        <input type="password" onChange={onChangeHandler} name="password" id="password" placeholder='password' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />
        <input type="submit" value="Sign in " className='px-4 py-2 bg-primary-color w-full text-white rounded-lg'/>
        
    </form>

  )
}

export default Login