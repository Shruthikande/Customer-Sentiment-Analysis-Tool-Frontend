import React from 'react'
import './Nav.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Nav = () => {
  const { isAuthenticated, role, logout } = useAuth() || {}
  return (
    <div className='navbar'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            {!isAuthenticated && <li><Link to='/login'>Login</Link></li>}
            {!isAuthenticated && <li><Link to='/signup'>Signup</Link></li>}
            {isAuthenticated && <li><Link to='/dashboard'>Dashboard</Link></li>}
            {isAuthenticated && <li><Link to='/upload'>Upload</Link></li>}
            {isAuthenticated && <li><Link to='/results'>Results</Link></li>}
            {isAuthenticated && <li><Link to='/trends'>Trends</Link></li>}
            {isAuthenticated && <li><Link to='/reports'>Reports</Link></li>}
            {isAuthenticated && <li><Link to='/feedback'>Feedback</Link></li>}
            {(role === 'admin') && <li><Link to='/admin/users'>Users</Link></li>}
            {(role === 'admin') && <li><Link to='/admin/logs'>Logs</Link></li>}
            {(role === 'admin') && <li><Link to='/admin/train'>Train</Link></li>}
            {isAuthenticated && <li><button onClick={logout} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit' }}>Logout</button></li>}
        </ul>
    </div>
  )
}

export default Nav