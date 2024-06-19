import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
            addUser: (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            },
            updateUser: (state, action) => {
                state.user = action.payload;
            },
            removeUser: (state) => {
                state.user = null;
                state.token = null;
            },
            updateProfilePhoto: (state, action) => {
                if (state.user) {
                    state.user.profilePhoto = action.payload;
                }
            }
    }
});

export const { addUser, updateUser, removeUser, updateProfilePhoto } = userSlice.actions;
export default userSlice.reducer;
