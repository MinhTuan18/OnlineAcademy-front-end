import React from 'react'
import LearningBody from '../../common/components/LearningBody'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { queryCourseById, userInfo as getUserInfo } from '../../service'

export default function Learning(props) {
    
    const history = useHistory()
    const { courseId } = useParams()
    const [courseInfo, setCourseInfo] = useState({courseId})

    useEffect(() => {
        const getData = async function () {
            const user = await getUserInfo(localStorage.getItem('userId'))
            if(!user.registeredCourses.includes(courseId))
            {
                history.push('/course/courseId')
            }

            const course = await queryCourseById(courseId)
            setCourseInfo({...courseInfo, ...course.data})
        }

        getData()
    }, [])

    return (
        <>
            <LearningBody courseInfo={courseInfo}></LearningBody>
        </>
    )
}
