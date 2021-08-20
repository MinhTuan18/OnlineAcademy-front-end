import React, { useState } from 'react';
import '../CourseSwiper/course-swiper.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateWatchlist } from '../../../service';

const CourseFigure = ({ course, isCourseInWatchList }) => {
    // console.log(isCourseInWatchList);
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const history = useHistory();
    const accessToken = localStorage.getItem('access_token');
    const [courseInWatchList, setCourseInWatchList] = useState(false);
    
    const handleAddToWatchlistClick = async (event) => {
        event.preventDefault();
        if (!loggedIn && !accessToken) {
            return Swal.fire({
                title: 'Error',
                text: 'Log in to add this course to watchlist!',
                icon: 'error',
                confirmButtonText: 'Login',
                showCancelButton: true,
            }). then(result => {
                if (result.isConfirmed) {
                    history.push('/login');
                }                
            })
        }
        const userId = localStorage.getItem('userId');
        // console.log(course);
        const updateWatchlistResult = await updateWatchlist(userId, course._id);
        console.log(updateWatchlistResult);
        if (updateWatchlistResult.success) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'This course has been added to your watch list',
                showConfirmButton: false,
                timer: 1500
            })
            setCourseInWatchList(true);
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: updateWatchlistResult.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className="swiper-slide item">
            <div className="course-one__single color-4">
                <div className="course-one__image">
                    <img src={course.thumbnailImageUrl ? course.thumbnailImageUrl : "/images/course-1-1.jpg"} alt="course" />
                    <Link className={(isCourseInWatchList || courseInWatchList) ? 'active' : ''} onClick={handleAddToWatchlistClick}>
                        <i className="far fa-heart"></i>
                    </Link>
                </div>
                <div className="course-one__content">
                    <Link className="course-one__category">{course.subCategoryName ? course.subCategoryName : "IT"}</Link>
                    <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt="" />
                        by <Link>{course.instructorName ? course.instructorName : "Unknown"}</Link>
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
                        <span className="course-one__stars-count">{course.totalRatings ? course.totalRatings : 0}</span>
                    </div>
                    <div className="course-one__meta">
                        <Link><i className="far fa-clock"></i> 10 Hours</Link>
                        <Link><i className="far fa-folder-open"></i> 6
                            Lectures</Link>
                        <Link>{course.fee}</Link>
                    </div>
                    <Link className="course-one__link" to={`/courses/${course._id}`}>See Preview</Link>
                </div>
            </div>
        </div>
    );
}

CourseFigure.propTypes = {
    course: PropTypes.object,
    isCourseInWatchList: PropTypes.bool,
}

export default CourseFigure;
