import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import { FaX } from "react-icons/fa6";
import { Link } from 'react-router';
const VerifyPop = ({setShowPop}) => {
    const [currentState,setCurrectState] = useState('login');
  return (
   <>
<div className='bg-white p-12 rounded-4xl '>
<div className="flex justify-between mb-4">
      <p className="text-center text-2xl">{currentState=='login'?'Sign in':'Sign up'}</p>
     <div className="cursor-pointer" onClick={()=>{
        setShowPop(false);
      }}><FaX /></div>
     </div>

   {currentState == 'login'?
   <><div className="mb-2"><Login /></div>
   Don't have an Account?  <span className="text-blue-600 cursor-pointer font-medium " onClick={()=>setCurrectState('signup')}>Sign Up</span>
   </>
   :
   <><div className="mb-2"><Signup /></div>
   Have an Account?  <span className="text-blue-600 cursor-pointer font-medium" onClick={()=>setCurrectState('login')}>Sign in</span>
   </>}
   
   </div>
   </>
  )
}

export default VerifyPop

