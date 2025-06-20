import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router'


const MobileApp = () => {
  return (
    <div className='w-2/4 my-32 mx-auto'>
    <h2 className="text-center text-4xl/12 mb-16">For Better Experience Dowload
    Tomato App</h2>
    <div className="img-holder flex justify-center gap-16">
        <Link to=''><img src={assets.play_store} alt="" /></Link>
        <Link to=''><img src={assets.app_store} alt="" /></Link>
        
    </div>
    </div>
  )
}

export default MobileApp