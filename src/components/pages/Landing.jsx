import React from 'react';
import Home from '../sections/Home';
import Icon from '../sections/Icon';
import '../../styles/style.css'
import Vehicles from '../sections/Vehicles';
import Brands from '../sections/Brands';
import Contact from '../sections/Contact';
import Reviews from'../sections/Reviews';
function Landing(props) {
    return (
        <div>
            <Home/>
            <Icon/>
            <Vehicles/>
            <Brands/>
            <Contact/>
            <Reviews/>
            
        </div>
    );
}

export default Landing;