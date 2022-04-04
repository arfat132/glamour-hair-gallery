import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <span className='emoji'>☹</span><br/>
            <span className='error'>404</span>
            <h3>Page not found</h3>
            <p>The page you are looking for doesn`t exist or an error occurred.</p>
            <p>Go back or head over to choose a new direction</p>
            <button className='btn' onClick={()=>navigate('/')}>Homepage</button>
        </div>
    );
};

export default NotFound;