import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    initialState:{
        admin: null
    },
    reducers:{
        addAdmin: (state, action) =>{
            state.admin = action.payload.admin;
            state.token = action.payload.token;
        },
        removeAdmin: (state) =>{
            state.admin = null;
            state.token = null;
        }
    }
});


export const {addAdmin, removeAdmin} = adminSlice.reducer;
export default adminSlice.reducer;