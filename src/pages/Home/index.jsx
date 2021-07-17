import React from 'react';
import { HomeHeader } from '../../common/components/Header';
import Slider from '../../common/components/Slider';
import CourseCat from '../../common/components/HomeCourseCat';
import CallToActionOne from '../../common/components/CallToActionOne';
import TeamTab from '../../common/components/TeamTab';
import CourseSwiper from '../../common/components/CourseSwiper';
import CallToActionTwo from '../../common/components/CallToActionTwo';
import Testimonial from '../../common/components/Testimonial';
import VideoDisplay from '../../common/components/VideoDisplay';
// import Brands from '../../common/components/Brands';
import CallToActionThree from '../../common/components/CallToActionThree';
import Footer from '../../common/components/Footer';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <Slider/>
            <CourseCat/>
            <CallToActionOne/>
            <TeamTab/>
            <CourseSwiper/>
            <CallToActionTwo/>
            <Testimonial/>
            <VideoDisplay/>
            <CallToActionThree/>
            <Footer/>
        </>
        
    );
}

export default Home;