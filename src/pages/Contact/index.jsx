import React from 'react';
import './assets/index.css';
import phone from './assets/phone_icon.png';
import email from './assets/email_icon.png';

function Contact() {
    return (
        <div className='min-vh-100'>
            <h1 className='d-flex justify-content-center'>Get in touch</h1>
            <div className='row mt-5 p-3 d-flex justify-content-center'>
                <div className='col d-flex justify-content-end'>
                    <p><img src={email} alt="graphic of an envelope" className='icon'></img>ryanbyoung1@gmail.com</p>
                </div>
                <div className='col ms-2'>
                    <p><img src={phone} alt="graphic of a phone" className='icon'></img>910-524-4802</p>
                </div>
            </div>
        </div>
    );
}

export default Contact