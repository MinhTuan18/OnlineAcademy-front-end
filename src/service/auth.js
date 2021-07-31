import axios from 'axios';
// import { END_POINT, } from '../config';

const authBackendApiUrl = `http://localhost:3000/api/auth`;


export const login = async (email, password) => { 
    // console.log(END_POINT);
    const response = await axios.post(`${authBackendApiUrl}/login`, {email, password});
    // console.log(response);
    const raw = response?.data ? response?.data : {};
    return raw;
}