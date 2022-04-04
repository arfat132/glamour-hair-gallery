import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
            <nav className='navbar'>
                <h1>Glamour Hair Gallery</h1>
                <div className='navLinks'>
                <NavLink className={({isActive})=> isActive ? "active-a" : "a"} to="/" >Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-a" : "a"}  to="/reviews">Reviews</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-a" : "a"} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-a" : "a"} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive})=> isActive ? "active-a" : "a"} to="/about">About</NavLink>
                </div>
            </nav>

    );
};

export default Header;