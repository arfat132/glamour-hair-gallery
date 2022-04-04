import Image from './image/home-image.jpg';
import './Home.css'
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
import useReviews from '../Hooks/useReviews';

const Home = () => {

    const [reviews] = useReviews([]);
    const navigate = useNavigate();
    
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
                
                <button className='btn' onClick={()=>navigate('/reviews')}>See All Reviews</button>
                
               
            </div>
       </div>
    );
};

export default Home;