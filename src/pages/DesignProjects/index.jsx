import React from 'react';
import './assets/index.css';
import email1 from './assets/email1.png';
import email2 from './assets/email2.png';
import email3 from './assets/email3.png';
import email4 from './assets/email4.png';
import event1 from './assets/event1.png';
import event2 from './assets/event2.png';
import event3 from './assets/event3.png';
import print1 from './assets/print1.png';
import print2 from './assets/print2.png';
import print3 from './assets/print3.png';
import print4 from './assets/print4.png';

function DesignProjects() {
    return (
        <div className='min-vh-100'>
            <h1 className='d-flex justify-content-center'>Design Work</h1>
            <div class="masonry">
                <img class="item" src={event2}></img>
                <img class="item" src={print1}></img>
                <img class="item" src={event3}></img>
                <img class="item" src={event1}></img>
                <img class="item" src={email3}></img>
                <img class="item" src={email1}></img>
                <img class="item" src={email4}></img>
                <img class="item" src={email2}></img>
                <img class="item" src={print4}></img>
                <img class="item" src={print2}></img>
                <img class="item" src={print3}></img>
            </div>
        </div>
    );
}

export default DesignProjects

{/* <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
    <div className="grid-item grid-item--width2">
        <img src={event2}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={print1}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={event3}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={event1}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={email3}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={email1}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={email4}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={email2}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={print4}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={print2}></img>
    </div>
    <div className="grid-item grid-item--width2">
        <img src={print3}></img>
    </div>
</div> */}