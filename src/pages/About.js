import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="center">
                <h1>ABOUT</h1>
                <br />
                <p>practice of different important concepts of React dev : API, Router, Navigation, Components in a funny way</p>
                <br />
                <p>Enjoy!</p>
            </div>
        </div>
    );
};

export default About;   