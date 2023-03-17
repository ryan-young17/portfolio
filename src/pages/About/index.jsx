import React from 'react';
import './assets/index.css';
import headshot from './assets/Headshot.png';

function About() {
    return (
        <div className='min-vh-100'>
            <div className='row'>
                <div className='col-3'>
                    <img src={headshot} alt='Headshot of Ryan Young'></img>
                </div>
                <div className='col-9'>
                    <p>My name is Ryan. I am a full-stack web developer with experience in various programming languages such as HTML, CSS, JavaScript, SQL, NoSQL, etc., and a passion for web design. I also have a background in marketing, writing, and graphic design, giving me an advanced perspective on web applications UI/UX. Blending these skills gives me the unique ability to understand both design and client-expectations, and how they coincide with the structure of the application. I look forward to any future projects, opportunities, and collaborations.</p>
                </div>
            </div>
        </div>
    );
}

export default About