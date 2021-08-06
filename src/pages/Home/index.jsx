import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
// import CourseFigure from '../../common/components/CourseFigure';
import { getAllCategories } from '../../service/categories';
import { queryMostViewsCourses, queryNewestCourses, queryMostRegistedSubCategoryLast7Days } from '../../service';
// import { queryMostRegistedSubCategoryLast7Days } from '../../service/subcategories';

const Home = () => {
    const loggedIn = useSelector(state => state.auth.loggedIn);

    const [categoryList, setCategoryList] = useState([]);
    const [mostViewCourseList, setMostViewCourseList] = useState([]);
    const [newestCourseList, setNewestCourseList] = useState([]);
    const [mostRegisterSubCategoryList, setMostRegisterSubCategoryList] = useState([]);


    useEffect(() => {
        setTimeout(async () => {
            const categories = await getAllCategories();
            // console.log(categories);
            setCategoryList(categories);
            const mostViewCourses = await queryMostViewsCourses();
            setMostViewCourseList(mostViewCourses);
            const newestCourses = await queryNewestCourses();
            setNewestCourseList(newestCourses);
            const mostRegisterSubCategories = await queryMostRegistedSubCategoryLast7Days();
            setMostRegisterSubCategoryList(mostRegisterSubCategories);
        }, 300);
    }, [])
    
    return (
        <>
            <HomeHeader loggedIn={loggedIn}/>
            <Slider categoryList={categoryList}/>
            <CourseCat subcategoryList={mostRegisterSubCategoryList}/>
            <CallToActionOne/>
            <TeamTab/>
            <CourseSwiper type="most-view" courseList={mostViewCourseList}/>
            <CourseSwiper type="newest" courseList={newestCourseList}/>
            <CallToActionTwo/>
            <Testimonial/>
            <VideoDisplay/>
            <CallToActionThree/>
            {/* <CourseFigure/> */}
            <Footer/>
        </>
    );
}

export default Home;