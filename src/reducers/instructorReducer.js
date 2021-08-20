import { createSlice } from '@reduxjs/toolkit';

export const instructorSlice = createSlice({
    name: 'instructor',
    initialState: {
        createdCourses: [],
        profile: {},
    },
    reducers: {
        setInstructorCreatedCourseList: (state, action) => {
            state.createdCourses = action.payload;
            console.log(state.createdCourses);
        },
    },
});

export const { setInstructorCreatedCourseList } = instructorSlice.actions;
export default instructorSlice.reducer;
