import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';


const Footer = () => {
  return (
    <div className="footer bg-[#323232] pt-[100px] pb-12">
        <div className="w-[1280px] mt-48  flex justify-between mx-auto text-white">
        <div className="info w-2/4 mr-4">
            <img src={assets.logo} alt="" className="" />
            <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta eum numquam? Maxime beatae numquam ab ipsam, cumque natus nulla corporis fugiat, animi, aut cum! Dolores libero odit culpa eligendi!
            </p>
            <div className="flex gap-4">
            <div className="p-2 border border-r-amber-50 rounded-full"><Link to =''><FaFacebookF /></Link></div>
            <div className="p-2 border border-r-amber-50 rounded-full"><Link to =''><FaTwitter /></Link></div>
            <div className="p-2 border border-r-amber-50 rounded-full"><Link to =''><FaLinkedinIn /></Link></div>
            

            </div>
        </div>
        <div className="company w-1/4">
            <h2 className="text-xl font-bold mb-4">COMPANY</h2>
            <ul className=''>
                <li className='m-1'><Link to=''>Home</Link></li>
                <li className='m-1'>   <Link to=''>About Us</Link> </li>
                <li className='m-1'>     <Link to=''>Delivery</Link> </li>
                <li className='m-1'>
                <Link to=''>Privacy Policy</Link> </li>
            </ul>
        </div>
        <div className="contact w-1/4">
            <h2 className="text-xl font-bold mb-4">GET IN TOUCH</h2>
            <p className="m-1">+1-212-256-7890</p>
            <p className="m-1">contact@tomato.com</p>
        </div>
        </div>
    <div className="w-[1280px] mx-auto"> <hr className="border border-gray-400  my-12" />
    <p className="text-white text-center">Copyright 2024 &copy; Tomato.com-All Right Reserved</p>
    </div>

    
    </div>
  )
}

export default Footer