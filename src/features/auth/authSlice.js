import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    logedUserData: null,
    isAuthenticated: false,
    authChecked: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.logedUserData = action.payload;
            state.isAuthenticated = true;
            state.authChecked = true;
        },
        removeUser: (state, action) => { //Logout functionality
            state.logedUserData = null;
            state.isAuthenticated = false;
            state.authChecked = true;
        }
    }
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;