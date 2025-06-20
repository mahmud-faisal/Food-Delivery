import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router'


const Banner = () => {
  return (
    <div className="relative z-30">
        <div className="img-banner z-30 ">
            <img src={assets.header_img} alt="" />
        </div>
        <div className="banner-content w-1/2 absolute top-1/4 left-1/16 text-white">
            <h2 className="text-6xl font-bold mb-2">Order your favorite food here</h2>
            <p className="mb-10">Choose from a deverse menu featuring a delectable array of dishes crafted with the food</p>
            <span className="px-4 py-2  text-xl rounded-4xl bg-white text-gray-900 ">
                <Link to =''>View Menu</Link>
            </span>
        </div>

    </div>
  )
}

export default Banner