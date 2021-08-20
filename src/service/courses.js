import axios from 'axios';
//import extract from '../common/utils/extract';
// import { END_POINT, } from '../config';

const coursesBackendApiUrl = `http://localhost:3000/api/courses`;

export const queryCoursesByAdvancedFilter = async (filter) => { 
    // console.log(END_POINT);
    // console.log(filter);
    const title = filter?.title ? filter?.title : '';
    const category = filter?.category ? filter?.category : '';
    const subCategory = filter?.subCategory ? filter?.subCategory : '';
    // console.log(title + ' ' + category + ' ' + subCategory);

    let response;

    if (title !== '') {
        if (category !== '') {
            response = await axios.get(`${coursesBackendApiUrl}?title=` + title + `&category=` + category);
        }
        else if (subCategory !== '') {
            response = await axios.get(`${coursesBackendApiUrl}?title=` + title + `&subCategory=` + subCategory);
        }
        else {
            response = await axios.get(`${coursesBackendApiUrl}?title=` + title);
        }
    }
    else {
        if (category !== '') {
            // console.log('OK');
            response = await axios.get(`${coursesBackendApiUrl}?category=` + category);    
        }
        else if (subCategory !== '') {
            response = await axios.get(`${coursesBackendApiUrl}?subCategory=` + subCategory);    
        }
        else response = await axios.get(`${coursesBackendApiUrl}`);
    }
    // console.log(response);
    // const raw = response?.data ? response?.data : {};
    // return {
    //     courses: raw.courses,
    //     // docsCount: raw.resultTotal, 
    return response;
}

export const queryMostViewsCourses = async () => {
    const response = await axios.get(`${coursesBackendApiUrl}?type=1`);
    console.log(response);
    const raw = response?.data ? response?.data : [];
    return raw;
}

export const queryNewestCourses = async () => {
    const response = await axios.get(`${coursesBackendApiUrl}?type=2`);
    console.log(response);
    const raw = response?.data ? response?.data : [];
    return raw;
}

export const createCourse = async (courseInfo) => {
    console.log(courseInfo);
    try {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken);
        const axiosConfig = {
            headers: {
                'x-access-token': accessToken
            }
        };
        const response = await axios.post(
            `${coursesBackendApiUrl}`, 
            courseInfo,
            axiosConfig
        );
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
