import React from 'react';
import Slider from './Slider';
import ServicesContainer from './ServicesContainer';
import AboutUs from './AboutUs';
import StayInTouch from './StayInTouch';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Chitromaya Home')
    return (
        <div>
            <Slider></Slider>
            <ServicesContainer></ServicesContainer>
            <AboutUs></AboutUs>
            <StayInTouch></StayInTouch>
        </div>
    );
};

export default Home;