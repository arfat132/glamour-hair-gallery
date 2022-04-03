import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('customers.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='cutomers-reviews'>
                <h1>Cutomers Reviews({reviews.length})</h1>
                <div className='cutomers-details'>
                {reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)}
                </div>

            </div>
    );
};

export default Reviews;