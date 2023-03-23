import React from 'react';
import graphic from './assets/graphic1.png';
import './assets/style.css';

function Home() {
    return (
        <div className='min-vh-100'>
            <div className='d-flex justify-content-center'>
                <img src={graphic} alt='Developer + Designer'></img>
            </div>
            <div className='d-flex justify-content-center ms-5 me-5 text-center'>
                <p className='welcome'>Welcome to my slice of space here on the internet. I’m so glad you’re here. <br/> Feel free to explore each tab to learn a little more about who I am and what I’m all about!</p>
            </div>
        </div>
    );
}

export default Home