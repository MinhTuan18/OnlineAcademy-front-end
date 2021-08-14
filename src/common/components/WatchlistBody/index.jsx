import React from 'react'
import { Link } from 'react-router-dom'

export default function WatchlistBody(props) {
    

    return (
        <>
            <div style={{marginBottom: "50px"}}>
                <div className="contact-one">
                    <div className="container">
                        <h2 className="contact-one__title text-center" >Watchlist</h2>
                    </div>
                </div>
                <div className="container" style={{marginTop: "-120px"}}>
                    <div className="row">
                        <div style={{display: "flex"}}>
                            <Link replace to="/my-courses">
                                <div className="user-profile__form-second my-courses-tab">
                                    <h2 className="user-profile__form-title" style={{color: "#81868a"}}>
                                        My Courses
                                    </h2>
                                </div>
                            </Link>
                            <div className="user-profile__form-top my-courses-tab">
                                <h2 className="user-profile__form-title">
                                    Watchlist
                                </h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row active-tab">
                    wlb                       
                    </div>


                </div>
            </div>
        </>
    )
}
