import axios from 'axios';
// import { END_POINT, } from '../config';

const authBackendApiUrl = `http://localhost:3000/api/auth`;


export const login = async (email, password) => { 
    // console.log(END_POINT);
    try {
        const response = await axios.post(`${authBackendApiUrl}/login`, {email, password});
        // console.log(response);
        const raw = response?.data ? response?.data : {};
        return raw;
    } catch (error) {
        return null;
    }
    
}

export const register = async (email, password, name) => { 
    // console.log(END_POINT);
    try {
        const response = await axios.post(`${authBackendApiUrl}/register`, {email, password, name});
        // console.log(response);
        const raw = response?.data ? response?.data : {};
        return raw;
    } catch (error) {
        return null;
    }
    
}

export const activateAccount = async (email, otp, hash) => { 
    // console.log(END_POINT);
    try {
        const response = await axios.post(`${authBackendApiUrl}/activate-account`, {email, otp, hash});
        // console.log(response);
        const raw = response?.data ? response?.data : {};
        return raw;
    } catch (error) {
        return null;
    }
}

export const resendOTP = async (email) => { 
    // console.log(END_POINT);
    const response = await axios.post(`${authBackendApiUrl}/resend-otp`, {email});
    console.log(response);
    const raw = response?.data ? response?.data : {};
    return raw;
}

export const changePassword = async (oldPassword, newPassword) => { 
    // console.log(END_POINT);
    
    try {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken);
        const axiosConfig = {
            headers: {
                'x-access-token': accessToken
            }
        };
        const response = await axios.post(
            `${authBackendApiUrl}/change-password`, 
            {oldPassword, newPassword},
            axiosConfig
        );
        console.log(response);
        const raw = response?.data ? response?.data : {};
        return raw;
    } catch (error) {
        console.log(error)
        return null;
    }
}


