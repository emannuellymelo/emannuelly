import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css";

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className="about-info">
                    Hello! I'm 
                    <br/> <span className="info-name">Emannuelly Melo,</span>
                    <br/> computer science student at Federal University of Campina Grande.
                </div>
                <div className="about-photo">
                <img 
                src={require("../../../assets/coding.png").default} className="picture"/>
                </div>
            </div>
            <SocialContact/>
        </div>
    )
}

export default About
