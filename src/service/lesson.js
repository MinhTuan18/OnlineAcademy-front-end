import axios from 'axios';
//import extract from '../common/utils/extract';
// import { END_POINT, } from '../config';

const lessonBackendApiUrl = `http://localhost:3000/api/chapter`;

export const queryChapters = async (courseId) => {
    const response = await axios.get(`${lessonBackendApiUrl}/?course=${courseId}`);
    const raw = response?.data ? response?.data : [];
    return raw;
}