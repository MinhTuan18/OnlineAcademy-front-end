import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import './course-swiper.css';
import { Link } from 'react-router-dom';

const CourseSwiper = () => {

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
                    <h2 className="block-title__title">Explore our <br />
                        popular courses</h2>
                </div>
            </div>
        </section>
        <section className="course-one course-one__teacher-details home-three">
            <div className="container">
                <div className="course-one__carousel">
                    <Swiper {...params} >
                    <div className="item">
                        <div className="course-one__single color-1">
                            <div className="course-one__image">
                                <img src="/images/course-1-1.jpg" alt="course" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link className="course-one__category">development</Link>
                                <div className="course-one__admin">
                                    <img src="/images/team-1-1.jpg" alt="" />
                                        by <Link>Lou Guerrero</Link>
                                </div>
                                <h2 className="course-one__title"><Link>New react bootcamp</Link></h2>
                                <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
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
                    <div className="item">
                        <div className="course-one__single color-2">
                            <div className="course-one__image">
                                <img src="/images/course-1-2.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link to="/courses" className="course-one__category">It & Software</Link>
                                <div className="course-one__admin">
                                    <img src="/images/team-1-2.jpg" alt="" />
                                        by <Link>Cora Diaz</Link>
                                </div>
                                <h2 className="course-one__title"><Link>Improve editing skills</Link></h2>
                                <div className="course-one__stars">
                            <span className="course-one__stars-wrap">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                                <span className="course-one__count">4.8</span>
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
                    <div className="item">
                        <div className="course-one__single color-3">
                            <div className="course-one__image">
                                <img src="/images/course-1-3.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <Link className="course-one__category">marketing</Link>
                                <div className="course-one__admin">
                                    <img src="/images/team-1-3.jpg" alt="" />
                                        by <Link>Ernest Rodriquez</Link>
                                </div>
                                <h2 className="course-one__title"><Link>Basics of photography</Link></h2>
                                <div className="course-one__stars">
                            <span className="course-one__stars-wrap">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                                <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-4">
                                <div className="course-one__image">
                                    <img src="/images/course-1-4.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link className="course-one__category">Photography</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-4.jpg" alt="" />
                                            by <Link>Katherine Collins</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link>Healthy workout tips</Link></h2>
                                    <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-5">
                                <div className="course-one__image">
                                    <img src="/images/course-1-5.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link className="course-one__category">marketing</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-5.jpg" alt="" />
                                        by <Link>Isabella Stanley</Link>
                                    </div>
                                    <h2 className="course-one__title"><Link>Affiliate
                                        bootcamp</Link>
                                    </h2>
                                    <div className="course-one__stars">
                                    <span className="course-one__stars-wrap">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-6">
                                <div className="course-one__image">
                                    <img src="/images/course-1-6.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to='courses' className="course-one__category">Health & Fitness</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-6.jpg" alt="" />
                                            by <Link>Katherine Collins</Link>
                                    </div>
                                    <h2 className="course-one__title">
                                        <Link>Healthy workout tips</Link>
                                    </h2>
                                    <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-1">
                                <div className="course-one__image">
                                    <img src="/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="courses" className="course-one__category">development</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-1.jpg" alt="" />
                                            by <Link>Lou Guerrero</Link>
                                    </div>
                                    <h2 className="course-one__title">
                                        <Link>New react bootcamp</Link>
                                    </h2>
                                    <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-2">
                                <div className="course-one__image">
                                    <img src="/images/course-1-2.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link tp="/courses" className="course-one__category">It & Software</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-2.jpg" alt="" />
                                            by <Link>Cora Diaz</Link>
                                    </div>
                                    <h2 className="course-one__title">
                                        <Link>Improve editing skills</Link>
                                    </h2>
                                    <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="course-one__count">4.8</span>
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
                        <div className="item">
                            <div className="course-one__single color-3">
                                <div className="course-one__image">
                                    <img src="/images/course-1-3.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>
                                <div className="course-one__content">
                                    <Link to="/courses" className="course-one__category">marketing</Link>
                                    <div className="course-one__admin">
                                        <img src="/images/team-1-3.jpg" alt="" />
                                            by <Link>Ruth Becker</Link>
                                    </div>
                                    <h2 className="course-one__title">
                                        <Link>Marketing strategies</Link>
                                    </h2>
                                    <div className="course-one__stars">
                                        <span className="course-one__stars-wrap">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="course-one__count">4.8</span>
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
                    </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CourseSwiper;