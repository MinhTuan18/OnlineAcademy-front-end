import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import './course-swiper.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseSwiper = ( { type, courseList } ) => {
    // const { type, courseList } = props;
    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
            <section className="course-one__top-title home-three">
                <div className="container">
                    <div className="block-title">
                        <h2 className="block-title__title">Explore our top 10<br />
                            {type === 'most-view' ? 'most - view courses' : 'newest courses'}</h2>
                    </div>
                </div>
            </section>
            <section className="course-one course-one__teacher-details home-three">
                <div className="container">
                    <div className="course-one__carousel">
                        <Swiper {...params} >
                            {courseList.map(course => {
                                return (
                                    <div className="item" key={course.id}>
                                        <div className="course-one__single color-4">
                                            <div className="course-one__image">
                                                <img src={course.thumbnailImageUrl ? course.thumbnailImageUrl : "/images/course-1-1.jpg"} alt="course" />
                                                    <i className="far fa-heart"></i>
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
                                                    <span className="course-one__stars-count">{course.numOfRatings ? course.numOfRatings : 0}</span>
                                                </div>
                                                <div className="course-one__meta">
                                                    <Link><i className="far fa-clock"></i> 10 Hours</Link>
                                                    <Link><i className="far fa-folder-open"></i> 6
                                                        Lectures</Link>
                                                    <Link>{course.fee}</Link>
                                                </div>
                                                <Link className="course-one__link">See Preview</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}

CourseSwiper.propTypes = {
    type: PropTypes.string,
    courseList: PropTypes.array,
}

export default CourseSwiper;