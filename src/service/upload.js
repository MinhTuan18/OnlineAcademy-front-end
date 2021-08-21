import axios from 'axios';

export const uploadImage = async (formData) => {
    try {
    const res = await axios.post('http://localhost:3000/upload', formData);
    } catch (err) {
        console.log(err);
    }
}   
