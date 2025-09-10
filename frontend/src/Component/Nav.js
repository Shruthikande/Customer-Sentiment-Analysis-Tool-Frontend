import React from 'react'
import './Nav.css' // Assuming you have a CSS file for styling
const Nav = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Login'>Login</a></li>
            <li><a href='/Logout'>Logout</a></li>
            <li><a href='/'>Signup</a></li>
            <li><a href='/'>Images</a></li>
            <li><a href='/'>References</a></li>
            <li><a href='/'>Links</a></li>            
        </ul>
    </div>
  )
}

export default Nav