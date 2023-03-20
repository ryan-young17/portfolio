import React from 'react';
import './assets/index.css';
import resume from './assets/resume.png';
import pdf from './assets/young_resume.pdf';

function Resume() {
    return (
        <div className='min-vh-100'>
            <div className='row ms-5'>
            <div className='col-12 col-md-4 col-lg-5 p-5'>
                <h1 className='ms-5 mt-5'>Want a closer look? <br/> Download below.</h1>
                <button className='button ms-5 mt-3'><a href={pdf} download>Download Here</a></button>
            </div>
            <div className='col-12 col-md-8 col-lg-7'>
                <img src={resume} alt="Ryan Young's resume" className='resume mb-5'></img>
            </div>
            </div>
        </div>
    );
}

export default Resume