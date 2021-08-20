import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import studentReducer from '../reducers/studentReducer';
import instructorReducer from '../reducers/instructorReducer';
import categoryReducer from '../reducers/categoryReducer';
import courseReducer from '../reducers/courseReducer';

export default configureStore({
    reducer: {
        auth: authReducer,
        student: studentReducer,
        instructor: instructorReducer,
        category: categoryReducer,
        course: courseReducer,
    },
});
