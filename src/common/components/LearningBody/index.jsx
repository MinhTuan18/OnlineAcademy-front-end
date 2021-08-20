import React from 'react'
import { PropTypes } from 'prop-types';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import './style.css'
import { useForm } from "react-hook-form";
import {postFeedBack} from '../../../service/feedback'
import Swal from 'sweetalert2';


LearningBody.propTypes = {
    courseInfo: PropTypes.object,
}

export default function LearningBody({ courseInfo }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const showSuccessModal = () => {
        Swal.fire({
            title: 'Success',
            text: 'Feedback sent!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
    const showInvalidModal = () => {
        Swal.fire({
            title: 'Error',
            text: 'Failed to send feedback!',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
    }

    const feedbackSubmit = async (data) => {
        const postData = {
            courseId: courseInfo._id,
            userId: localStorage.getItem("userId"),
            rating: data.rating,
            ratingContent: data.ratingContent
        }

        const result = await postFeedBack(postData)
        if (result !== false) {
            showSuccessModal()
        } else {
            showInvalidModal()
        }
    }

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
                    <div className="description-section" style={{fontWeight:"bold", fontSize: "20px"}}>Feedback</div>

                    <form style={{display:"flex"}} className="description-section"
                            noValidate="novalidate"
                            onSubmit={handleSubmit(feedbackSubmit)}>
                        <select {...register("rating", { required: true })} style={{border:"none"}}>
                            <option></option>    
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        {errors.rating && <span>Rating required</span>}
                        <input type="text" placeholder="Share your review here!" {...register("ratingContent", { required: true })} style={{width:"50%",marginLeft:"25px",border:"none"    }}/>
                        {errors.ratingContent && <span>Review required</span>}

                
                        <button type="submit" style={{marginLeft: "auto", border:"none"}} className="">Send</button>
                    </form>

                </div>

                <div className="lesson-section">
                    <div className="lesson-title">
                        <span>
                            Course content</span>
                    </div>
                    <div className="lesson-list">
                        <Link onClick={console.log('')}>
                            <div className="lesson-item lesson-item-active">
                                <div className="lesson-item-icon"><i className="fas fa-play"></i></div>
                                asdasdas
                            </div>
                        </Link>
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
