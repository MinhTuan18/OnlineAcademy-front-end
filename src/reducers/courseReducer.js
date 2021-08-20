import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        title: '',
        subCategory: '',
    },
    reducers: {
        createCourse: (state, action) => {
            if (action.payload.courseTitle) {
                state.title = action.payload.courseTitle;
                console.log(state.title);
            }
            if (action.payload.subCategory) {
                state.subCategory = action.payload.subCategory;
                console.log(state.subCategory);
            }
        },
       
    },
});

export const { createCourse } = courseSlice.actions;
export default courseSlice.reducer;
