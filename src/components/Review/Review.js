import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, title, img, reviewComments, ratings } = review;
    return (
        <div className='review'>
            <div className='review-info'>
            <img src={img} alt="" />
                <div className='customer-info'>
                    <h3>{name}</h3>
                    <h5>{title}</h5>
                </div>
                
            </div>
            <span>{ratings}</span>
            <p>{reviewComments}</p>
            
        </div>
    );
};

export default Review;