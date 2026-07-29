import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    logedUserData: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.logedUserData = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state, action) => {
            state.logedUserData = null;
            state.isAuthenticated = false;
        }
    }
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;