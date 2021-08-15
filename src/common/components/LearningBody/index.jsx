import React from 'react'
import { PropTypes } from 'prop-types';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import './style.css'

LearningBody.propTypes = {
    courseInfo: PropTypes.object,
}

export default function LearningBody({courseInfo}) {


    return (
        <>
            <div className="top-bar">
                <div className="top-bar-item">
                    <Link to="/" style={{ display: "flex" }}>
                        <img src="/images/icons/favicon-32x32.png" />
                        <div className="top-bar-link">
                            &nbsp;Online Academy
                        </div>
                    </Link>
                </div>
                <div className="top-bar-item">
                    <span>|</span>
                </div>
                <div className="top-bar-item" style={{ textTransform: "uppercase" }}>
                    <span>{courseInfo.title}</span>
                </div>
                <div className="top-bar-item" style={{ display: 'flex' }}>
                    <div className="top-bar-item">
                        <Link to="/my-courses">
                            <div className="top-bar-link">
                                My courses
                            </div>
                        </Link>
                    </div>
                    <div className="top-bar-item">
                        <span>|</span>
                    </div>
                    <div className="top-bar-item">
                        <Link to="/user-profile">
                            <div className="top-bar-link">
                                <i className="fa fa-user-circle"></i>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="learning-container">
                <div className="main">
                    <ReactPlayer width="100%" height="475px" controls url="https://youtu.be/Zzn9-ATB9aU"></ReactPlayer>
                    <div className="description-section">Overview</div>
                    <div className="description-section">Feedback</div>
                </div>

                <div className="lesson-section">
                    <div className="lesson-title">
                        <span>
                            Course content</span>
                    </div>
                    <div className="lesson-list">
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                        <div className="lesson-item">
                            <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                            asdasdas
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
