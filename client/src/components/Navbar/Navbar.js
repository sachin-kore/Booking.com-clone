import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className='logo'>YoYoBooking</span>
                </Link>
                <div className='navItems'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    )
}
