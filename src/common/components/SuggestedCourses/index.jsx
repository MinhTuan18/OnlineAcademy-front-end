import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { queryCourseById } from '../../../service/courses';
import { PropTypes } from 'prop-types';

SuggestedCourses.propTypes = {
    courseId: PropTypes.any
}

const abc = ['a', 'b', 'c', 'd', 'e']

export default function SuggestedCourses(props) {

    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        const getData = async function () {
            const course = await queryCourseById(props.courseId)
            setCourseInfo(course.data)
        }

        getData()
    }, [])

    return (
        <>

            <div className="course-details__list white_background">
                <h2 className="course-details__list-title">BEST SELLERS IN THIS CATEGORY</h2>

                {
                    abc.map(a => {
                        return (
                            <div className="course-details__list-item" key={a}>
                                <div className="course-details__list-img">
                                    <img src="/assets/images/lc-1-1.jpg" alt="" />
                                </div>
                                <div className="course-details__list-content">
                                    <Link className="course-details__list-author" to="#">by <span>Lydia Byrd</span></Link>
                                    <h3><Link to="#">{courseInfo.title}</Link></h3>
                                    <div className="course-details__list-stars">
                                        <span>{courseInfo.averageRating}</span>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}
