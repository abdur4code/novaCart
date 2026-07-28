import { createSlice } from "@reduxjs/toolkit";

const getUsersData = () => {
    const data = localStorage.getItem('usersData');
    const usersData = data ? JSON.parse(data) : [];
    return usersData;
}

const getLogedUser = () => {
    const data = localStorage.getItem('logedUser');
    const currentUserData = data ? JSON.parse(data) : null;
    return currentUserData;
}

const initialState = {
    usersData: getUsersData(),
    logedUser: getLogedUser(),
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const {fullName, email, password} = action.payload;
            const userExist = state.usersData.some(user => user.email === email);

            if(userExist){
                state.error = 'Email already taken!';
                return;
            }

            state.usersData.push({fullName, email, password});
            console.log('users -> ', state.usersData);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
            state.error = null;
        },
        login: (state, action) => {
            const {email, password} = action.payload;
            const userFound = state.usersData.find(user => user.email === email && user.password === password);

            if(!userFound){
                state.error = 'Invalid email or password';
                return;
            }

            state.logedUser = {fullName: userFound.fullName, email: userFound.email}
            console.log('users -> ', state.logedUser);
            localStorage.setItem('logedUser', JSON.stringify(state.logedUser));
            state.error = null;
        },
        logout: (state) => {
            state.logedUser = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
})

export const {registerUser, login, logout, clearError} = authSlice.actions;
export default authSlice.reducer;