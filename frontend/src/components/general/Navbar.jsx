import React, { useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router'
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";

import Login from './Login';
import VerifyPop from './VerifyPop';



const Navbar = () => {
    const [showPop,setShowPop] = useState(false);
  return (
    <>
    <div className="flex w-[1280px] m-auto justify-between py-8 relative">
        <div className="logo w-32">
            <img src={assets.logo} alt="" />
        </div>
        <div className="menu">
            <ul className='flex gap-4'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/menu'>Menu</Link> </li>
                <li><Link to='/app'>Mobile App</Link> </li>
                <li><Link to='/contact'>Contact Us</Link> </li>
            </ul>
        </div>

        <div className="cart-signin flex gap-4">
           <Link to='' className='text-2xl'>  <FaSearch /></Link>
           <Link to='/cart' className='text-2xl'><FaCartShopping /></Link>
            <p className='border border-primary-color rounded-4xl px-4 py-2 hover:bg-primary-color hover:text-white text-medium cursor-pointer' onClick={()=>setShowPop(true)}>Sign in</p>
        </div>
        {showPop? <><div className="absolute top-7/4 left-1/2 z-50 w-5/12 transform -translate-x-1/2"> <VerifyPop setShowPop={setShowPop}/> </div></>:<></>}
    </div>
    </>
  )
}

export default Navbar