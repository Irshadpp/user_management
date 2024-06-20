import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userToken: null,
        isAuthenticated: false,
        count: 0,
    },
    reducers: {
            addUser: (state, action) => {
                state.user = action.payload.user;
                state.userToken = action.payload.userToken;
                state.isAuthenticated = true;
            },
            updateUser: (state, action) => {
                state.user = action.payload;
            },
            removeUser: (state) => {
                state.user = null;
                state.userToken = null;
                state.isAuthenticated = false;
            },
            updateProfilePhoto: (state, action) => {
                if (state.user) {
                    state.user.profilePhoto = action.payload;
                }
            },
            increment: (state) =>{
                state.count = state.count + 1
            },
            decrement: (state) =>{
                state.count = state.count - 1
            },
            clearCount: (state) =>{
                state.count = state.count = 0;
            }
            
    }
});

export const { addUser, updateUser, removeUser, updateProfilePhoto, increment, decrement, clearCount } = userSlice.actions;
export default userSlice.reducer;
