

import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <Link to='/form'>Form</Link>
        <Link to='/list'>List</Link>
        <Link to='/about'>About</Link>
        <Link to='/lift'>LiftStateUp</Link>
        <Link to='/formUR'>FormUR</Link>
    </nav>
  )
}
