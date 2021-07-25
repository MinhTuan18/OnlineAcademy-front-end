import axios from 'axios';
// import { END_POINT, } from '../config';

const categoriesBackendApiUrl = `http://localhost:3000/api/categories`;


export const getAllCategories = async () => { 
    // console.log(END_POINT);
    const response = await axios.get(`${categoriesBackendApiUrl}`);
    console.log(response);
    const raw = response?.data ? response?.data : [];
    return raw;
}