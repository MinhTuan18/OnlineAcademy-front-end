import React from 'react'
import PropTypes from 'prop-types'

CourseReviews.propTypes = {
    courseInfo: PropTypes.object,
}

const abc = ['a', 'b', 'c']

export default function CourseReviews({ courseInfo }) {

    return (
        <>
            <div>
                <h2 className="course-details__subtitle">REVIEWS</h2>
                <div className="row">
                    <div className="col-xl-7 d-flex">
                        <div className="course-details__progress my-auto">
                            <div className="course-details__progress-item">
                                <p className="course-details__progress-text">Excellent</p>
                                <div className="course-details__progress-bar">
                                    <span style={{ width: `0%` }} className="no-bubble"></span>
                                </div>
                                <p className="course-details__progress-count">5</p>
                            </div>
                            <div className="course-details__progress-item">
                                <p className="course-details__progress-text">Very Good</p>
                                <div className="course-details__progress-bar">
                                    <span style={{ width: `0%` }} className="no-bubble"></span>
                                </div>
                                <p className="course-details__progress-count">2</p>
                            </div>
                            <div className="course-details__progress-item">
                                <p className="course-details__progress-text">Average</p>
                                <div className="course-details__progress-bar">
                                    <span style={{ width: `0%` }} className="no-bubble"></span>
                                </div>
                                <p className="course-details__progress-count">1</p>
                            </div>
                            <div className="course-details__progress-item">
                                <p className="course-details__progress-text">Poor</p>
                                <div className="course-details__progress-bar">
                                    <span style={{ width: `0%` }} className="no-bubble"></span>
                                </div>
                                <p className="course-details__progress-count">0</p>
                            </div>
                            <div className="course-details__progress-item">
                                <p className="course-details__progress-text">Terrible</p>
                                <div className="course-details__progress-bar">
                                    <span style={{ width: `0%` }} className="no-bubble"></span>
                                </div>
                                <p className="course-details__progress-count">0</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                        <div className="course-details__review-box">
                            <p className="course-details__review-count">{courseInfo.averageRating}

                                <i className="fas fa-star"></i>

                            </p>

                            <p className="course-details__review-text">30 reviews</p>
                        </div>
                    </div>
                </div>
                {
                    abc.map(a => {
                        return (
                            <div className="course-details__comment-single" key={a}>
                                <div className="course-details__comment-top">
                                    <div className="course-details__comment-img">
                                        <img src="https://taoanhonline.com/wp-content/uploads/2020/02/anh-doremon-0.jpg?v=1582383592" alt="" />
                                    </div>
                                    <div className="course-details__comment-right">
                                        <h2 className="course-details__comment-name">Steven Meyer</h2>
                                        <div className="course-details__comment-meta">
                                            <p className="course-details__comment-date">26 July, 2019</p>
                                            <div className="course-details__comment-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star star-disabled"></i>
                                            </div>
                                        </div>
                                        <p className="course-details__comment-text">Lorem ipsum is simply free text
                                            used by
                                            copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed
                                            inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
