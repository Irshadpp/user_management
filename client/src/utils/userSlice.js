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
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;