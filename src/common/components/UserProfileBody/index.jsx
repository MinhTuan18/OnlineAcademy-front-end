import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default function UserProfileBody(props) {


    return (
        <>
            <div style={{marginBottom: "50px"}}>
                <div className="contact-one">
                    <div className="container">
                        <h2 className="contact-one__title text-center" >User Profile</h2>
                    </div>
                </div>
                <div className="container" style={{marginTop: "-120px"}}>
                    <div className="row">
                        <div className="col-lg-3" style={{padding: '0'}}>
                            <div className="user-profile__form-top">
                                <h2 className="user-profile__form-title">
                                    User Profile
                                </h2>
                            </div>
                            <Link to="/change-password">
                                <div className="user-profile__form-second">
                                    <h2 className="user-profile__form-title" style={{color: "#81868a"}}>
                                        Change Password
                                    </h2>
                                </div>
                            </Link>
                            
                        </div>
                        <div className="col-lg-9" style={{padding: '0'}}>
                            <div className="become-teacher__form">
                                <form className="become-teacher__form-content contact-form-validated" noValidate="novalidate" style={{borderColor: "#2da397"}}>
                                    <input type="text" placeholder="Name" value="abcs" style={{marginBottom: "50px"}}/>
                                    <input type="email" placeholder="Email" value="asdasdads@asdasd" style={{marginBottom: "50px"}}/>
                                    <button type="submit" className="thm-btn become-teacher__form-btn">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
