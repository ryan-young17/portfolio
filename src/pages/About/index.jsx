import React from 'react';
import './assets/style.css';
import headshot from './assets/Headshot.png';

function About() {
    return (
        <div className='min-vh-100'>
            <div className='row m-5 justify-content-center'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <img src={headshot} alt='Headshot of Ryan Young' className='headshot'></img>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <h2 className='greeting'>Hello!</h2>
                    <p className='bio'>I am a creative at heart who is driven by the beauty of the written word and all things design. I find joy in creating a natural rhythm of words or a provocative metaphor–and inspiration in the limitless world of digital design.<br/>After discovering these passions and recognizing my meticulous nature and knack for problem solving, I turned to code to learn something new–challenge myself–and find that thing that calls to all my passions. Front-end web development was the ticket, and since taking the bootcamp course, I can’t get enough of it. Experimenting with passion projects and learning new languages is how I spend most of my free time these days. So far, I have a working knowledge of HTML, CSS, JavaScript, SQL, jQuery, Bootstrap, React, Node.JS, MongoDB, Express.JS, and Git/GitHub; and I am currently learning Swift.<br/>Though I am drawn to front-end web development, I also thoroughly enjoy exercising my creative spirit writing or designing print and digital graphics. With a professional background in marketing, I hold an advanced perspective on effective design and intentional language. I am open to any opportunity to create, collaborate, or jump on board with a company that fosters creativity and growth.</p>
                </div>
            </div>
        </div>
    );
}

export default About