"use client"

import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='custom-navbar'>
        <div className='custom-navbar-logo'>
          <h1 className='custom-navbar-logo-text'>
            <Link href={"/"}>NextJAY</Link>
          </h1>
        </div>
        <div className='custom-navbar-links'>
            <Link className='custom-navbar-link' href={"/"}>Home</Link>
            <Link className='custom-navbar-link' href={`/user/ked3949`}>Profile</Link>
            <Link className='custom-navbar-link' href={"/login"}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar