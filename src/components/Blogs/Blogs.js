import React from 'react';
import Image1 from './images/contextAPI.png';
import Image2 from './images/semantic-tag.png';
import Image3 from './images/inline-block.png';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='questions'>
            <h1>Questions/Answers</h1>
            <div className='question'>
                <div >
                <h2>What is contextAPI? How does it works?</h2>
                <p><strong>Answers:</strong></p>
                </div>
                <img src={Image1} alt="" />
            </div>
            <div  className='question'>
                <div>
                <h2>What is sementic tag?</h2>
                <p><strong>Answers:</strong></p>
                </div>
                <img src={Image2} alt="" />
            </div>
            <div className='question'>
                <div className=''>
                <h2>What is the difference between inline block and inline block elements?</h2>
                <p><strong>Answers:</strong></p>
                </div>
                <img src={Image3} alt="" />
            </div>
        </div>
    );
};

export default Blogs;