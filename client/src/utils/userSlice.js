import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        addUser: (state, action) => ({
            ...state,
            user: action.payload.user,
            token: action.payload.token,
        }),
        updateUser: (state, action) => ({
            ...state,
            user: action.payload,
        }),
        removeUser: () => ({
            user: null,
            token: null,
        }),
        updateProfilePhoto: (state, action) => ({
            ...state,
            user: {
                ...state.user,
                profilePhoto: action.payload,
            }
        }),
    }
});

export const { addUser, updateUser, removeUser, updateProfilePhoto } = userSlice.actions;
export default userSlice.reducer;
