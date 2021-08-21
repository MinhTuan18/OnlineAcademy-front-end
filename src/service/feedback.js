import axios from 'axios';
// import { END_POINT, } from '../config';

const feedbackBackendApiUrl = `http://localhost:3000/api/feedback`;

export const queryFeedbackByCourse = async (courseId) => {
    const response = await axios.get(`${feedbackBackendApiUrl}/?courseId=${courseId}`)
    const raw = response?.data?.docs ? response?.data?.docs : []
    return raw
}

export const postFeedBack = async (data) => {
    let result
    const accessToken = localStorage.getItem('access_token');
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    console.log(data)
    const response = await axios.post(`${feedbackBackendApiUrl}`, data, axiosConfig).then(response => {
        result = response?.data?._id ? response?.data?._id : false;
    }).catch((e) => {
        result = false
    })

    return result;
}