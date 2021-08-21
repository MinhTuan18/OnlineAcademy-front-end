import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import { PropTypes } from 'prop-types';
import CourseReviews from '../CourseReviews';
import SuggestedCourses from '../SuggestedCourses';
import { userInfo as getUserInfo, toggleWatchlist, buyCourse} from '../../../service/user';


CourseDetailBody.propTypes = {
    courseInfo: PropTypes.object,
    loggedIn: PropTypes.bool

}

export default function CourseDetailBody({ courseInfo, loggedIn }) {

    const [userInfo, setUserInfo] = useState({registeredCourses: [], watchlist:[], feedbacks: []});
    const [change, setChange] = useState(0)
    const history = useHistory();

    useEffect(() => {
        const fetch = async () => {
            const user = await getUserInfo(localStorage.getItem('userId'));
            setUserInfo(user);
        }

            fetch();
    }, [change])

    let amountStudents = courseInfo.registeredStudents === undefined ? 0 : courseInfo.registeredStudents.length;
    let amountReviews = courseInfo.feedbacks === undefined ? 0 : courseInfo.feedbacks.length;
    let instructorName = courseInfo.instructor ===undefined ? '' : courseInfo.instructor.name;
    let instructorDate = courseInfo.instructor ===undefined ? '' : courseInfo.instructor.createdAt;
    
    const WatchlistToggleClick = async (e) =>{
        e.preventDefault()
        if(!userInfo._id) {
            history.push('/login')
        }
        const result = await toggleWatchlist(localStorage.getItem('userId'), courseInfo._id)
        if(result)
        {
            setChange(change => change +1);
        }
    }

    const BuyThisCourse= async (e) => {
        e.preventDefault()
        if(!localStorage.getItem('userId')) {
            history.push('/login')
        }
        const result = await buyCourse(localStorage.getItem('userId'), courseInfo._id)
        if(result)
        {
            setChange(change => change +1);
        }
    }

    return (
        <>
            <section className="course-details">
                <div className="course-details__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">{courseInfo.title ? courseInfo.title : ''}</h2>

                                        <p className="course-details__tab-text">{courseInfo.shortDesc}</p>

                                        <div className="course-one__stars course-details__info">
                                            <span>
                                                Rating:
                                            </span>
                                            <span className="course-one__count white_text">{courseInfo.averageRating}</span>
                                            <span className="course-one__stars-wrap">
                                                &nbsp;<i className="fa fa-star"></i>
                                            </span>
                                            <span>&nbsp;({amountReviews} rating(s)) {amountStudents} student(s)</span>
                                        </div>
                                        <div className="course-details__info">
                                            Created by <Link to="#">{instructorName}</Link>
                                        </div>
                                        <div className="course-details__info">
                                            Last updated {courseInfo.updatedAt}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div className="course-details__price">
                                    <p className="course-details__price-text">Course
                                        price </p>
                                    <br />
                                    <p className="course-details__price-amount">{(courseInfo.fee !== undefined ? courseInfo.fee : '') + ' VND'}</p>
                                    <p>{(courseInfo.discount ? '(' + courseInfo.discount + '% off)' : '')}</p>
                                    <div>
                                    {userInfo.registeredCourses.includes(courseInfo._id)
                                    ? <Link to={`/learn/${courseInfo._id}`} ><button className="thm-btn course-details__price-btn">Learn now</button> </Link>
                                    : <button onClick={BuyThisCourse} className="thm-btn course-details__price-btn">Buy This Course</button>}
                                        
                                        <button className="thm-btn course-details__price-btn" onClick={WatchlistToggleClick}><i className={`far fa-heart ${
                                             userInfo.watchlist.includes(courseInfo._id)? 'fa':''
                                         }`}></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-lg-8">
                            <div className="course-details__content">
                                <div className="course-one__image">
                                    <img src={courseInfo.thumbnailImageUrl} alt={courseInfo._id} />
                                </div>
                                <div >
                                    <h2 className="course-details__subtitle">DESCRIPTION</h2>
                                    <p className="course-details__tab-text">{courseInfo.detailDesc}</p>
                                </div>

                                <div>
                                    <h2 className="course-details__subtitle">COURSE CONTENT</h2>
                                    <div>
                                        <ul className="course-details__curriculum-list">
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__meta-icon video-icon">
                                                        <i className="fas fa-play"></i>
                                                    </div>
                                                    <Link to="#">Introduction to Editing</Link> <span>Preview</span>
                                                </div>
                                                <div className="course-details__curriculum-list-right">16 minutes
                                                </div>
                                            </li>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    <div className="course-details__meta-icon video-icon">
                                                        <i className="fas fa-play"></i>
                                                    </div>
                                                    <Link to="#">Overview of Editing</Link> <span>Preview</span>
                                                </div>
                                                <div className="course-details__curriculum-list-right">10 minutes
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="course-details__subtitle">INSTRUCTOR</h2>
                                    <div className="course-details__comment-single">
                                        <div className="course-details__comment-top">
                                            <div className="course-details__comment-img">
                                                <img src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" alt="" />
                                            </div>
                                            <div className="course-details__comment-right">
                                                <h2 className="course-details__comment-name">{instructorName}</h2>
                                                <div className="course-details__comment-meta">
                                                    <p className="course-details__comment-date">{instructorDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="course-details__comment-text"></p>
                                    </div>
                                </div>

                                {/* <CourseReviews feedbacks={courseInfo}></CourseReviews> */}

                            </div>
                        </div>
                        <div className="col-lg-4">
                                {/* <SuggestedCourses courseId="60fe0caf60ebe250e40c2be5"></SuggestedCourses> */}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
