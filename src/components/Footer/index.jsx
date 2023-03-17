import React from 'react';
import gitHub from './assets/github-mark-white.png';
import linkedIn from './assets/linkedin-mark-white.png';
import twitter from './assets/twitter-mark-white.png';
import './assets/index.css';

function Footer() {
    return (
        <footer className='p-2 d-flex justify-content-center'>
            <ul>
                <a href='https://github.com/ryan-young17' target="_blank">
                    <img src={gitHub} alt='GitHub Logo' className='socialLink'></img>
                </a>
                <a href='https://www.linkedin.com/in/ryan-young-77491a19b/' target="_blank">
                    <img src={linkedIn} alt='LinkedIn Logo' className='socialLink'></img>
                </a>
                <a href='https://twitter.com/ryan_young08' target="_blank">
                    <img src={twitter} alt='Twitter Logo' className='socialLink'></img>
                </a>
            </ul>
        </footer>
    );
}

export default Footer