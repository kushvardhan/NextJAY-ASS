"use client"

import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='w-full h-[13vh] bg-zinc-800 flex justify-between items-center'>
        <div className='h-full w-[30%] px-3 flex items-center justify-around'>
          <h1 className='text-4xl font-bold text-start text-white'>
            <Link href={"/"}>NextJAY</Link>
          </h1>
        </div>
        <div className='w-[40%] text-lg flex justify-around items-center'>
            <Link className='text-white hover:text-blue-300' href={"/"}>Home</Link>
            <Link className='text-white hover:text-blue-300' href={`/user/ked3949`}>Profile</Link>
            <Link className='text-white hover:text-blue-300' href={"/login"}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar