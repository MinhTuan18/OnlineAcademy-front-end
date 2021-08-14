import React from 'react'
import { useSelector } from 'react-redux';
import { HomeHeader } from '../../common/components/Header'
import LearningBody from '../../common/components/LearningBody'

export default function Learning(props) {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    

    return (
        <>
            <HomeHeader loggedIn={loggedIn}/>

            <LearningBody></LearningBody>
        </>
    )
}
