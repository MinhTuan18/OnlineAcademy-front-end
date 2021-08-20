import axios from 'axios';
//import extract from '../common/utils/extract';
// import { END_POINT, } from '../config';

const coursesBackendApiUrl = `http://localhost:3000/api/courses`;

export const queryCourses = async (query) => {
    const response = await axios.get(`${coursesBackendApiUrl}`, { params: { ...query } });
    const raw = response?.data ? response?.data : [];
    return raw;
}
export const queryCoursesByAdvancedFilter = async (filter) => { 
    // console.log(END_POINT);
    // console.log(filter);
    const title = filter.title ? filter.title : '';
    const category = filter.category ? filter.category : '';
    const subCategory = filter.subCategory ? filter.subCategory : '';
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

export const queryCourseById = async (courseId) => {
    const response = await axios.get(`${coursesBackendApiUrl}/${courseId}`)
    const raw = response?.data ? response?.data : []
    return raw
}