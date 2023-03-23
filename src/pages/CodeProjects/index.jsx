import React from 'react';
import './assets/index.css';
import blog from './assets/images/blog.png';
import duet from './assets/images/duet.png';
import ecommerce from './assets/images/ecommerce.png';
import employee from './assets/images/employee.png';
import note from './assets/images/note.png';
import password from './assets/images/password.png';
import quiz from './assets/images/quiz.png';
import social from './assets/images/social.png';
import stock from './assets/images/stock.png';
import team from './assets/images/team.png';
import todo from './assets/images/todo.png';
import weather from './assets/images/weather.png';

function CodeProjects() {
    return (
        <div className='min-vh-100'>
            <h1 className='pageHeader d-flex justify-content-center'>Web Development</h1>
            <div class="masonry">
                <div className='container'>
                    <img className="item" src={blog}></img>
                    <div className='info'>
                        <h4 className='title'>The Tech Blog</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://thawing-gorge-80777.herokuapp.com/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/tech-blog' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={duet}></img>
                    <div className='info'>
                        <h4 className='title'>Duet</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://frozen-garden-71099.herokuapp.com/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/duet' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={social}></img>
                    <div className='info'>
                        <h4 className='title'>Social Media Backend</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://drive.google.com/file/d/1qAAyplpKWNtzHNaqKRKqsUNZBxbCLGaR/view' target='_blank'>Walk-Through</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/social-network-backend' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={weather}></img>
                    <div className='info'>
                        <h4 className='title'>Weather Dashboard</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://ryan-young17.github.io/weather-forecast/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/weather-forecast' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={stock}></img>
                    <div className='info'>
                        <h4 className='title'>Centaur Investments</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='http://murmuring-headland-68808.herokuapp.com/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/full-stack-investment-app' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={note}></img>
                    <div className='info'>
                        <h4 className='title'>The Note Taker</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://whispering-beyond-64371.herokuapp.com/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/note-taker' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={quiz}></img>
                    <div className='info'>
                        <h4 className='title'>The Code Quiz</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://ryan-young17.github.io/code-quiz/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/code-quiz' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={employee}></img>
                    <div className='info'>
                        <h4 className='title'>Employee Tracker</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/employee-tracker' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={ecommerce}></img>
                    <div className='info'>
                        <h4 className='title'>E-Commerce Backend</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://drive.google.com/file/d/18-ETjsaHtJMOlVok0lmBfOYR6lzFsoE2/view' target='_blank'>Walk-Through</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/ecommerce-backend' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={password}></img>
                    <div className='info'>
                        <h4 className='title'>Password Generator</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://ryan-young17.github.io/generate-password/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/generate-password' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={todo}></img>
                    <div className='info'>
                        <h4 className='title'>Todo Scheduler</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://ryan-young17.github.io/todo-schedule/' target='_blank'>Live Site</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/todo-schedule' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <img className="item" src={team}></img>
                    <div className='info'>
                        <h4 className='title'>The Team Generator</h4>
                        <button className='buttonStyle'>
                            <a className='link' href='https://ryan-young17.github.io/team-profile-generator/' target='_blank'>Example</a>
                        </button>
                        <button className='buttonStyle'>
                            <a className='link' href='https://github.com/ryan-young17/team-profile-generator' target='_blank'>Repo</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodeProjects