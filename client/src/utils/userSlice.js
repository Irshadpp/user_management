import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
        token: null,
    },
    reducers:{
        addUser: (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser: (state)=>{
            state.user = null;
            state.token = null;
        },
        updateProfilePhoto: (state, action) =>{
            state.user.profilePhoto = action.payload;
        }
    }
});

export const {addUser,removeUser,updateProfilePhoto} = userSlice.actions;
export default userSlice.reducer;