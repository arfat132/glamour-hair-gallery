import React from 'react';
import Image1 from './images/contextAPI.png';
import Image2 from './images/semantic-tag.png';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className='questions'>
            <h1>Questions/Answers</h1>
            <div className='question'>
                <div >
                <h2>What is context API?</h2>
                <p><strong>Answers:</strong> Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.  Context API is aimed at solving the problem of prop drilling. Context API is convenient for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and so on. In conditions where we have these types of data, we can use the Context API and we don’t necessarily have to use extra modules. Even though, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API. </p>
                </div>
                <img src={Image1} alt="" />
            </div>
            <div  className='question'>
                <div>
                <h2>What is sementic tag?</h2>
                <p><strong>Answers:</strong> Semantic HTML tags allow us to add meaning to our markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads our content it doesn’t understand the context and meaning. So semantic HTML tags let us serve structured content to our users, which is especially important for on-page SEO and accessibility. HTML5 has added some new semantic elements to the markup. For example,  nav , section , article , aside etc.</p>
                </div>
                <img src={Image2} alt="" />
            </div>
            </div>
    );
};

export default Blogs;