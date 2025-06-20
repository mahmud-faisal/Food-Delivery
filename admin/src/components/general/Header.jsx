import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { Link } from 'react-router'
const Header = () => {
  return (
    <header className="flex w-9/10 m-auto justify-between py-2">
        <div className="logo"><Link to=''><img src={assets.logo} alt="" /></Link></div>
        <div className="page-title">Log in</div>
        <div className="profile"><Link to=''><img src={assets.profile_image} alt="" /></Link></div>
    </header>
  )
}

export default Header