import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import studentReducer from '../reducers/studentReducer';


export default configureStore({
    reducer: {
        auth: authReducer,
        student: studentReducer,
    },
});
