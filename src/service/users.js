import axios from 'axios';
// import { END_POINT, } from '../config';

const userBackendApiUrl = `http://localhost:3000/api/users`;


export const updateWatchlist = async (userId, courseId) => { 
    // console.log(END_POINT);
    try {
        const accessToken = localStorage.getItem('access_token');
        // console.log(accessToken);
        const axiosConfig = {
            headers: {
                'x-access-token': accessToken
            }
        };
        const response = await axios.post(`${userBackendApiUrl}/${userId}/update-watchlist`, { courseId }, axiosConfig);
        console.log(response);
        const raw = response?.data ? response?.data : {};
        return raw;
    } catch (error) {
        if (error.response) {
            // Request made and server responded
            console.log(error.response);
            
            console.log(error.response.data);
            console.log(error.response.status);
            return error.response.data;
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return {message: 'Server is not available now. Please try again later!'};
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return {message: error.message};
        }
    }
}

