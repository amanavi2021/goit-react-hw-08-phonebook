import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, updateUser} from './operations';

const initialState = {
    user: { name: null, email: null},
    token: null, 
    isLoggedIn: false, 
    isUpdating: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [updateUser.pending](state) {
            state.isUpdating = true;
        },
        [updateUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isUpdating = false;
        },
        [updateUser.rejected](state) {
            state.isUpdating = false;
        },
    },

});

export const authReducer = authSlice.reducer;