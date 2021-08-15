import axios from 'axios';
// import { END_POINT, } from '../config';

const userBackendApiUrl = `http://localhost:3000/api/users`;

export const userInfo = async (id) => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    const axiosConfig = {
        headers: {
            'x-access-token': accessToken
        }
    };
    const response = await axios.get(`${userBackendApiUrl}/${id}`, axiosConfig);
    const raw = response?.data ? response?.data : [];
    return raw;
}