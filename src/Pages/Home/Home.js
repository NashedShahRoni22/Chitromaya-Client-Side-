import React from 'react';
import Slider from './Slider';
import aboutImg from '../../Images/About.jpg';
import stayImig from '../../Images/StayInTouch.jpg';
import ServicesContainer from './ServicesContainer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ServicesContainer></ServicesContainer>
            <div className="about-us">
                <img src={aboutImg} alt="" />
            </div>
            <div className="stay-in-touch">
                <img src={stayImig} alt="" />
            </div>
        </div>
    );
};

export default Home;