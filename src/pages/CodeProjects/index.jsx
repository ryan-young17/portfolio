import React from 'react';
import './assets/index.css';
import blog from './assets/blog.png';
import duet from './assets/duet.png';
import employee from './assets/employee.png';
import note from './assets/note.png';
import quiz from './assets/quiz.png';
import social from './assets/social.png';
import stock from './assets/stock.png';
import weather from './assets/weather.png';

function CodeProjects() {
    return (
        <div className='min-vh-100'>
            <h1 className='d-flex justify-content-center'>Web Development Work</h1>
            <div class="masonry">
                <div>
                    <img class="item" src={blog}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={duet}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={social}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={weather}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={stock}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={note}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={quiz}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
                <div>
                    <img class="item" src={employee}></img>
                    <button>Live Site</button>
                    <button>Repo</button>
                </div>
            </div>
        </div>
    );
}

export default CodeProjects