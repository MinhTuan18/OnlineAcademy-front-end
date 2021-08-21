import axios from 'axios';
import UserProfile from '../pages/UserProfile';
// import { END_POINT, } from '../config';

const userBackendApiUrl = `http://localhost:3000/api/users`;

export const userInfo = async (id) => {
    let raw
    const accessToken = localStorage.getItem('access_token');
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    const response = await axios.get(`${userBackendApiUrl}/${id}`, axiosConfig).then(response=>{
        raw = response?.data ? response?.data : [];
    }).catch(e=>{
        
    })
    return raw;
}

export const toggleWatchlist = async (id, courseId) => {
    const accessToken = localStorage.getItem('access_token');
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    const response = await axios.post(`${userBackendApiUrl}/${id}/update-watchlist`, {courseId}, axiosConfig);
    const result = response?.data?.success === true ? response?.data?.success : false;
    return result;
}

export const buyCourse = async (id, courseId) => {
    const accessToken = localStorage.getItem('access_token');
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    const response = await axios.post(`${userBackendApiUrl}/${id}/buy-course`, {courseId}, axiosConfig);
    const result = response?.data?.success === true ? response?.data?.success : false;
    return result;
}

export const UpdateProfile = async (id, data) => {
    const accessToken = localStorage.getItem('access_token');
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    console.log(data)
    const response = await axios.post(`${userBackendApiUrl}/${id}/update-profile`, data, axiosConfig);
    const result = response?.data?.success === true ? response?.data?.success : false;
    return result;
}