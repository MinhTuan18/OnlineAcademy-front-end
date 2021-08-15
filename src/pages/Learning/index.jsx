import React from 'react'
import LearningBody from '../../common/components/LearningBody'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { queryCourseById } from '../../service'

export default function Learning(props) {
    
    const { courseId } = useParams()

    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        const getData = async function () {
            const course = await queryCourseById(courseId)
            setCourseInfo(course.data)
        }

        getData()
    }, [])

    return (
        <>
            <LearningBody courseInfo={courseInfo}></LearningBody>
        </>
    )
}
