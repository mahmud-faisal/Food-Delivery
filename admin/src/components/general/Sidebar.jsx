import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { Link } from 'react-router'
const Sidebar = () => {
  return (
    <div className='w-2/10 h-screen border-r-1'>
    <ul className='flex flex-col items-end gap-8 pt-8'>
        <li className='border-l-1 border-l-gray-400 border-y-1 border-y-gray-400 w-8/10 flex' >
            <Link to ='add' className='flex justify-end gap-4 p-3'><img src={assets.add_icon} alt="" className="" /> <span className='font-semibold'>Add Items</span></Link>
        </li>
        <li className='border-l-1 border-l-gray-400 border-y-1 border-y-gray-400 w-8/10 flex' >
            <Link to ='items' className='flex justify-end gap-4 p-3'><img src={assets.order_icon} alt="" className="" /> <span className='font-semibold'>List Items</span></Link>
        </li>
        <li className='border-l-1 border-l-gray-400 border-y-1 border-y-gray-400 w-8/10 flex' >
            <Link to ='' className='flex justify-end gap-4 p-3'><img src={assets.order_icon} alt="" className="" /> <span className='font-semibold'>Orders</span></Link>
        </li>
    
    </ul>
    </div>
  )
}

export default Sidebar