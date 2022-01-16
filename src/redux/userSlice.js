import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name:"anna",
            email:"john@gmail.com",
            password:"1234",
        },
        pending: false,
        error: null,
    },      
    reducers: {
        updateStart : (state) => {
        state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = null;
        }
       
    },
})

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;