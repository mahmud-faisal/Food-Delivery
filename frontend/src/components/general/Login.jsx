import React from 'react'



const Login = () => {
  

  return (
    
    
    <form action="">

        <input type="email" name="email" id="email" placeholder='Your Email' className='border border-gray-500 w-full p-2 rounded-lg my-2' /><br />
       
        <input type="Password" name="Password" id="Password" placeholder='Password' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />
        <input type="submit" value="Sign in " className='px-4 py-2 bg-primary-color w-full text-white rounded-lg'/>
    </form>

  )
}

export default Login