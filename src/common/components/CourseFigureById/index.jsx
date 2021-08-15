import React,{useEffect, useState} from 'react'
import '../CourseSwiper/course-swiper.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { queryCourseById } from '../../../service';

const CourseFigureById = (props) => {
    const { courseId } = props;

    const [info, setInfo] = useState({})
    useEffect(() => {
        const fetch = async () => {
            const inf = await queryCourseById(courseId)

            setInfo(inf.data)
        }

        fetch()
    }, [])

    return (
        <div className="item">
            <div className="course-one__single color-1">
                <div className="course-one__image">
                    <img src="/images/course-1-1.jpg" alt="course" />
                    <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                    <Link className="course-one__category"></Link>
                    <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt="" />
                        by <Link></Link>
                    </div>
                    <h2 className="course-one__title"><Link to={`/course/${info.id}`}>{info.title}</Link></h2>
                    <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">{info.averageRating}</span>
                        <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                        <Link><i className="far fa-clock"></i> 10 Hours</Link>
                        <Link><i className="far fa-folder-open"></i> 6
                            Lectures</Link>
                        <Link>$18</Link>
                    </div>
                    <Link className="course-one__link">See Preview</Link>
                </div>
            </div>
        </div>
    )
}

export default CourseFigureById;


CourseFigureById.propTypes = {
    courseId: PropTypes.any
}