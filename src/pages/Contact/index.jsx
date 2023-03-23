import React from 'react';
import './assets/style.css';
import phone from './assets/phone_icon.png';
import email from './assets/email_icon.png';

function Contact() {
    return (
        <div className='min-vh-100'>
            <h1 className='d-flex justify-content-center contactHeader'>Get in touch</h1>
            <p className='d-flex justify-content-center mt-4 contactText'>Feel free to contact me via email, text, or call. I'm looking forward to hearing from you!</p>
            <div className='row mt-3 p-3 d-flex justify-content-center'>
                <div className='col d-flex justify-content-end'>
                    <p className='contactInfo'><img src={email} alt="graphic of an envelope" className='icon'></img>ryanbyoung1@gmail.com</p>
                </div>
                <div className='col ms-2'>
                    <p className='contactInfo'><img src={phone} alt="graphic of a phone" className='icon'></img>910-524-4802</p>
                </div>
            </div>
        </div>
    );
}

export default Contact