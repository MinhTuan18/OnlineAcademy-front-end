import '../CourseSwiper/course-swiper.css';
import { Link } from 'react-router-dom';
const CourseFigure = (props) => {
    const { course } = props;
    return (
        <div className="item">
            <div className="course-one__single color-1">
                <div className="course-one__image">
                    <img src="/images/course-1-1.jpg" alt="course" />
                        <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                    <Link className="course-one__category">{course.subCategory}</Link>
                    <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt="" />
                            by <Link>{course.instructorName}</Link>
                    </div>
                    <h2 className="course-one__title"><Link>{course.title}</Link></h2>
                    <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                        <span className="course-one__count">{course.averageRating}</span>
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
    );
}

export default CourseFigure;