import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <h1>This is Aboutus page</h1>
      <nav>
        <Link to='company'>Company</Link>
        <Link to='team'>Team</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
