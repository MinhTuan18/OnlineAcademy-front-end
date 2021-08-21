import React from 'react'
import PropTypes from 'prop-types'

CourseReviews.propTypes = {
    feedbacks: PropTypes.array,
}


export default function CourseReviews({ feedbacks }) {
    // console.log('aaaaaa'+JSON.stringify(feedbacks)
    let fb = feedbacks.feedbacks === undefined ? [] : {...feedbacks.feedbacks}

    return (
        <>
            <div>
                <h2 className="course-details__subtitle">REVIEWS</h2>
                <div className="row">
                {
                    fb.map(a => {
                        return (
                            <div className="course-details__comment-single" key={a._id}>
                                <div className="course-details__comment-top">
                                    <div className="course-details__comment-img">
                                        <img src="https://taoanhonline.com/wp-content/uploads/2020/02/anh-doremon-0.jpg?v=1582383592" alt="" />
                                    </div>
                                    <div className="course-details__comment-right">
                                        <h2 className="course-details__comment-name">{a.userId}</h2>
                                        <div className="course-details__comment-meta">
                                            <p className="course-details__comment-date">{a.updatedAt}</p>
                                            <div className="course-details__comment-stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star star-disabled"></i>
                                            </div>
                                        </div>
                                        <p className="course-details__comment-text">{a.ratingContent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </>
    )
}
