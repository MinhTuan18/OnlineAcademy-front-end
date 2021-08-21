import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../UserProfileBody/style.css';
import { userInfo as getUserInfo} from '../../../service/user'
import CourseFigureById from '../CourseFigureById';

export default function UserCoursesBody(props) {

    const [userInfo, setUserInfo] = useState({registeredCourses:[]});

    useEffect(() => {
        const fetch = async () => {
            const user = await getUserInfo(localStorage.getItem('userId'));
            setUserInfo(user);
        }

        fetch();
    }, [])

    return (
        <>
            <div style={{marginBottom: "50px"}}>
                <div className="contact-one">
                    <div className="container">
                        <h2 className="contact-one__title text-center" >My Courses</h2>
                    </div>
                </div>
                <div className="container" style={{marginTop: "-120px"}}>
                    <div className="row">
                        <div style={{display: "flex"}}>
                            <div className="user-profile__form-top my-courses-tab">
                                <h2 className="user-profile__form-title">
                                    My Courses
                                </h2>
                            </div>
                            <Link replace to="/watchlist">
                                <div className="user-profile__form-second my-courses-tab">
                                    <h2 className="user-profile__form-title" style={{color: "#81868a"}}>
                                        Watchlist
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row active-tab">
                    {userInfo.registeredCourses?
                    userInfo.registeredCourses.map(c => {
                        return ( 
                            <div key={c}>
                                <CourseFigureById courseId={c}></CourseFigureById>
                            </div>
                        )
                    }):''}                          
                    </div>



                </div>
            </div>
        </>
    )
}
