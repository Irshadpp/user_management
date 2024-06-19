import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name:'admin',
    initialState:{
        admin: null
    },
    reducers:{
        addAdmin: (state, action) =>{
            console.log("add admin called");
            state.admin = action.payload.admin;
            state.adminToken = action.payload.adminToken;
        },
        removeAdmin: (state) =>{
            state.admin = null;
            state.adminToken = null;
        }
    }
});


export const {addAdmin, removeAdmin} = adminSlice.actions;
export default adminSlice.reducer;