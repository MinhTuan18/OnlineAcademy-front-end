import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        subCategories: [],
    },
    reducers: {
        initCategoryList: (state, action) => {
            state.categories = action.payload;
            console.log(state.categories);
        },
        setSubCategories: (state, action) => {
            state.subCategories = action.payload;
            console.log(state.subCategories);
        },
    },
});

export const { initCategoryList, setSubCategories } = categorySlice.actions;
export default categorySlice.reducer;
