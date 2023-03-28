import React from 'react';
import './assets/style.css';
import email1 from './assets/images/email1.png';
import email2 from './assets/images/email2.png';
import email3 from './assets/images/email3.png';
import email4 from './assets/images/email4.png';
import event1 from './assets/images/event1.png';
import event2 from './assets/images/event2.png';
import event3 from './assets/images/event3.png';
import print1 from './assets/images/print1.png';
import print2 from './assets/images/print2.png';
import print3 from './assets/images/print3.png';
import print4 from './assets/images/print4.png';

function DesignProjects() {
    return (
        <div className='min-vh-100'>
            <h1 className='d-flex justify-content-center designTitle'>Graphic Design</h1>
            <div class="masonry">
                <a href='https://drive.google.com/file/d/1oH7ZeoqTvKzdjPfy06bLADrW79GaUJtc/view?usp=sharing' target='_blank'>
                    <img class="item" src={event2}></img>
                </a>
                <a href='https://drive.google.com/file/d/18HxmHTI1j0wFGTDcoewpyGXjKDMISHrm/view?usp=sharing' target='_blank'>
                    <img class="item" src={print1}></img>
                </a>
                <a href='https://drive.google.com/file/d/1sAmKQxP-_pFCjMfk3Qi_8pFush6fYls4/view?usp=sharing' target='_blank'>
                    <img class="item" src={event3}></img>
                </a>
                <a href='https://drive.google.com/file/d/19KBB_tkWlaYacNHoPrVsDE1V-Jyqj2oq/view?usp=sharing' target='_blank'>
                    <img class="item" src={event1}></img>
                </a>
                <a href='https://drive.google.com/file/d/1muWKx7UdUb-bq5kKaEC2lZy7QOVSovRM/view?usp=sharing' target='_blank'>
                    <img class="item" src={email3}></img>
                </a>
                <a href='https://drive.google.com/file/d/1YYo2hNe3jdacGHc8PDK54zOdb6SxVTRC/view?usp=sharing' target='_blank'>
                    <img class="item" src={email1}></img>
                </a>
                <a href='https://drive.google.com/file/d/1muWKx7UdUb-bq5kKaEC2lZy7QOVSovRM/view?usp=sharing' target='_blank'>
                    <img class="item" src={email4}></img>
                </a>
                <a href='https://drive.google.com/file/d/1nTTdB4klm8BI_Nj5lVX7FnxOV5wkS3k0/view?usp=sharing' target='_blank'>
                    <img class="item" src={email2}></img>
                </a>
                <a href='https://drive.google.com/file/d/1T_otEQabZHEoUmWnTEVFETO8SLfub5yQ/view?usp=sharing' target='_blank'>
                    <img class="item" src={print4}></img>
                </a>
                <a href='https://drive.google.com/file/d/1Il9oHrG7cqSan0CpF8vxGEZHWnAl2cAY/view?usp=sharing' target='_blank'>
                    <img class="item" src={print2}></img>
                </a>
                <a href='https://drive.google.com/file/d/12nFApj-h1us1_31XXSq3WTKbtj3x3o0w/view?usp=sharing' target='_blank'>
                    <img class="item" src={print3}></img>
                </a>
            </div>
        </div>
    );
}

export default DesignProjects