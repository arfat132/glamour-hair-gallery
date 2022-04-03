import React, { useEffect, useState } from 'react';
import Image from './image/home-image.jpg';
import './Home.css'
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('customers.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
             <div className='home'>
            <div className='home-info'>
                <h1>With us, you will never have hair rising experiences! </h1>
                <p>A hair dryer is an electromechanical device that blows ambient or hot air over damp hair to speed the evaporation of water to dry the hair. </p>
            </div>
            
            <div className='home-image'>
                <img src={Image} alt="" />
            </div>
          
            </div>
            <div className='cutomers-reviews'>
                <h1>Cutomers Reviews({reviews.length})</h1>
                <div className='cutomers-details'>
                {reviews.slice(0, 3).map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)}
                </div>
                
                <button className='btn'>See All Reviews</button>
                
               
            </div>
       </div>
    );
};

export default Home;