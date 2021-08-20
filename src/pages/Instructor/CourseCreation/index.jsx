import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Container, Button, Card, Divider, TablePagination } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { CourseCreationNavbar } from '../../../common/components/InstructorNavbar';
import FooterNavbar from '../../../common/components/FooterNavbar';
import CourseCreationBody from './CourseCreation';
import { setSubCategories, createCourse } from '../../../reducers';

const DashboardLayoutRoot = styled('div')(
    ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '100%',
      width: '100%',
      color: '#000',
      flexDirection: 'column'
    })
);

const CourseCreation = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const categories = useSelector(state => state.category.categories);
    // const subCategories = useSelector(state => state.category.subCategories);
    const subCatsOfSelectedCat = useSelector(state => state.category.subCategories);
    const [step, setStep] = useState(1);

    useEffect(() => {
        switch (location.pathname) {
            case '/instructor/course/create/step-1':
                setStep(1);
                break;
            case '/instructor/course/create/step-2':
                setStep(2);
                break;
            case '/instructor/course/create/step-3':
                setStep(3);
                break;
            default:
                setStep(1);
                break;
        }
    }, location.pathname)
    // useEffect(() => {
    //     console.log(subCats);
    //     dispatch(setSubCategories(subCats));
    // }, [subCats])
    const handleCourseCategorySubmit = (category) => {
        const idx = categories.findIndex(obj => obj._id === category);
        // console.log(categories[idx]);
        if (idx !== -1){
            dispatch(setSubCategories(categories[idx].subCategories));
        }
    }

    const handleCourseCreationSubmit = (course) => {
        // console.log(course);
        dispatch(createCourse(course));
    }
    
    return (
        <DashboardLayoutRoot>
            <CourseCreationNavbar step={step}/>
            {/* {step === 1 ? <CourseCreationBody step={step} onCourseCreationSubmit={handleCourseCreationSubmit} onCourseCategorySubmit={handleCourseCategorySubmit}/> : 
                step === 2 ? <CourseCreationBody step={step} categories={categories} onCourseCategorySubmit={handleCourseCategorySubmit} onCourseCreationSubmit={handleCourseCreationSubmit}/> : 
                    <CourseCreationBody step={step} subCategories={subCats} onCourseCreationSubmit={handleCourseCreationSubmit} onCourseCategorySubmit={handleCourseCategorySubmit}/>
            } */}
            <CourseCreationBody step={step} categories={categories} subCategories={subCatsOfSelectedCat} onCourseCategorySubmit={handleCourseCategorySubmit} onCourseCreationSubmit={handleCourseCreationSubmit}/>
        </DashboardLayoutRoot>
    );
}

export default CourseCreation;
