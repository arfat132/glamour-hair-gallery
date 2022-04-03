import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
            <nav className='navbar'>
                <h1>Glamour Hair Gallery</h1>
                <div className='navLinks'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                </div>
                 </nav>

    );
};

export default Header;