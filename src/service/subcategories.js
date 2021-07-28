import axios from 'axios';
// import { END_POINT, } from '../config';

const subcategoriesBackendApiUrl = `http://localhost:3000/api/sub-categories`;

export const queryMostRegistedSubCategoryLast7Days = async () => { 
    // console.log(END_POINT);
    const response = await axios.get(`${subcategoriesBackendApiUrl}/most-registered`);
    console.log(response);
    const raw = response?.data ? response?.data : [];
    return raw;
}