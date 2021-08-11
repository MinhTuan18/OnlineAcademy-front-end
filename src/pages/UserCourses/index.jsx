import React from 'react'
import Footer from '../../common/components/Footer'
import { Header } from '../../common/components/Header'
import UserCoursesBody from '../../common/components/UserCoursesBody/UserCoursesBody'

export default function UserCourses(props) {
    

    return (
        <>
            <Header></Header>
            <UserCoursesBody></UserCoursesBody>
            <Footer></Footer>
        </>
    )
}
