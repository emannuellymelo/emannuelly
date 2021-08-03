import React from 'react';
import './web.css';

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#projects'>
                <i class="fi-rr-laptop option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <i class="fi-rr-list-check option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                <i class="fi-rr-users option-icon"></i>Groups
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
