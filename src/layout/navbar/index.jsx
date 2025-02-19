import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-center mt-[40px]'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/update">Update</Link>
        <Link to="/detail">Detail</Link>
      </nav>
    </div>
  )
}

export default Navbar