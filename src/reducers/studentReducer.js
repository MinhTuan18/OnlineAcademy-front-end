import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        watchList: [],
        profile: {},
    },
    reducers: {
        setStudentWatchList: (state, action) => {
            state.watchList = action.payload;
            console.log(state.watchList);
        },
    },
});

export const { setStudentWatchList } = studentSlice.actions;
export default studentSlice.reducer;
