import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews([]);
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