import { createSlice, current } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        title: '',
        subCategoryName: '',
        category: '',
        shortDesc: '',
        detailDesc: '',
    },
    reducers: {
        createCourse: (state, action) => {
            if (action.payload.courseTitle) {
                state.title = action.payload.courseTitle;
                console.log(state.title);
            }
            if (action.payload.subCategory) {
                state.subCategoryName = action.payload.subCategoryName;
                console.log(state.subCategory);
            }
        },
        setCourseInfo: (state, action) => {
            console.log(action.payload);
            
            state.title = action.payload.title;
            state.subCategory = action.payload.subCategory;
            state.category = action.payload.category;
            state.shortDesc = action.payload.shortDesc;
            state.detailDesc = action.payload.detailDesc;
            // console.log(current(state.title));
        }
    },
});

export const { createCourse, setCourseInfo } = courseSlice.actions;
export default courseSlice.reducer;
