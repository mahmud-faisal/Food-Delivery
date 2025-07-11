import React, { useContext, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";

import Login from './Login';
import VerifyPop from './VerifyPop';
import { StoreContext } from '../../context/StoreContext';



const Navbar = () => {
    const [showPop,setShowPop] = useState(false);
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();
    const logout=( )=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
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

           {!token?  <button className='border border-primary-color rounded-4xl px-4 py-2 hover:bg-primary-color hover:text-white text-medium cursor-pointer' onClick={() => setShowPop("login")}
            >Sign in</button>
            :
            <div className="navbar-profile relative group z-31">
              <img src={assets.profile_icon} alt="" />
              <ul className='absolute right-0 top-6 mt-2 hidden group-hover:block bg-amber-200  w-35 px-2'>
                <li className=' py-2 cursor-pointer flex gap-2 '>
                  <img src={assets.bag_icon} alt="" /><p>Orders</p>
                </li>
                <hr className='text-gray-400'/>
                <li onClick={logout} className='py-2 cursor-pointer flex gap-2'>
                  <img src={assets.logout_icon} alt="" /><p>Logout</p>
                </li>
              </ul>
            </div>
            }
          
        </div>
        {showPop && (
  <div className="absolute top-7/4 left-1/2 z-50 w-5/12 transform -translate-x-1/2">
    <VerifyPop setShowPop={setShowPop} currentState={showPop} />
  </div>
)}


    </div>
    </>
  )
}

export default Navbar