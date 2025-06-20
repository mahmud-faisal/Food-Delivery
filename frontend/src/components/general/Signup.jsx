import React from 'react'

const Signup = () => {
  return (
    <div>    <form action="">
        
    <input type="name" name="name" id="name" placeholder='Your Name' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />

   <input type="email" name="email" id="email" placeholder='Your Email' className='border border-gray-500 w-full p-2 rounded-lg my-2' /><br />
  
   <input type="Password" name="Password" id="Password" placeholder='Password' className='border border-gray-500 w-full p-2 rounded-lg my-2'/><br />
   <input type="submit" value="Create Account " className='px-4 py-2 bg-primary-color w-full text-white rounded-lg'/>
</form></div>
  )
}

export default Signup