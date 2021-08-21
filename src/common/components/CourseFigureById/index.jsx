import React,{useEffect, useState} from 'react'
import '../CourseSwiper/course-swiper.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { queryCourseById } from '../../../service';

const CourseFigureById = (props) => {
    const { courseId } = props;

    const [info, setInfo] = useState({comments: [], registeredStudents: [], instructor: {name:""}, registeredStudents:[]})
    useEffect(() => {
        const fetch = async () => {
            const inf = await queryCourseById(courseId)

            setInfo(inf.data)
        }

        fetch()
    }, [])

    return (
        <div className="item">
            <div className="course-one__single color-1" style={{minWidth:'370px'}}>
                <div className="course-one__image" style={{height: "243px"}}>
                    <img src={info.thumbnailImageUrl} alt={info.id}  />
                </div>
                <div className="course-one__content" style={{height: "395px"}}>
                    <Link className="course-one__category"></Link>
                    <div className="course-one__admin">
                        By <Link>{info.instructor.name ? info.instructor.name :""}</Link>
                    </div>
                    <h2 className="course-one__title"><Link to={`/course/${info._id}`}>{info.title}</Link></h2>
                    <div className="course-one__stars">
                        <span className="course-one__count">{info.averageRating}</span>
                        <span className="course-one__stars-wrap">
                        &nbsp;<i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__stars-count">{info.registeredStudents.length}</span>
                    </div>
                    <div className="course-one__meta">
                        <Link><i className="far fa-user"></i> {info.registeredStudents.length} student(s)</Link>
                        <Link>{info.fee}VND</Link>
                    </div>
                    <Link to={`/course/${info.id}`} className="course-one__link">GO TO COURSE</Link>
                </div>
            </div>
        </div>
    )
}

export default CourseFigureById;


CourseFigureById.propTypes = {
    courseId: PropTypes.any
}