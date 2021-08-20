import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import CourseDetailBody from '../../common/components/CourseDetailBody';
import { useParams } from 'react-router';
import { queryCourseById } from '../../service/courses';

export default function CourseDetail(props) {

    const loggedIn = useSelector(state => state.auth.loggedIn);

    const { courseId } = useParams()

    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const getData = async function () {
            const course = await queryCourseById(courseId)
            setCourseInfo(course.data)
        }
        
        getData()
    }, [])

    return (
        <>
            <Header />
            <CourseDetailBody courseInfo={courseInfo} loggedIn={loggedIn}/>
            <Footer />
        </>
    )
}
