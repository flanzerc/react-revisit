import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userData: null,
}

const userAuthSlice = createSlice({
    name: "userauth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('slice, ' , action)
            state.isAuthenticated = true;
            state.userData= action.payload.userData
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = userAuthSlice.actions;

export default userAuthSlice.reducer;