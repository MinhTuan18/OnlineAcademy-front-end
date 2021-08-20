import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: null
    },
    reducers: {
        setUserInfo: (state, action) => {
            if (action.payload.isAuthenticated) {
                state.loggedIn = true;
                localStorage.setItem('access_token', action.payload.accessToken);
                localStorage.setItem('userId', action.payload.user.id);
                localStorage.setItem('userName', action.payload.user.name);
                localStorage.setItem('role', action.payload.user.role);
            } else {
                state.loggedIn = false;
                localStorage.setItem('access_token', '');
            }
        },
        logout: state => {
            state.loggedIn = false;
            localStorage.setItem('access_token', '');
            localStorage.setItem('userId', '');
            localStorage.setItem('role', '');
        }
    },
});

export const { setUserInfo, logout } = authSlice.actions;
export default authSlice.reducer;
