"use client"

import Link from 'next/link';


const Navbar = () => {
  return (
    <div style={{
      width: '100%',
      height: '13vh',
      backgroundColor: '#27272a',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <div style={{
          height: '100%',
          width: '30%',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            textAlign: 'start',
            color: 'white'
          }}>
            <Link href={"/"}>NextJAY</Link>
          </h1>
        </div>
        <div style={{
          width: '40%',
          fontSize: '1.125rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
            <Link href={"/"} style={{ color: 'white' }}>Home</Link>
            <Link href={`/user/ked3949`} style={{ color: 'white' }}>Profile</Link>
            <Link href={"/login"} style={{ color: 'white' }}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar