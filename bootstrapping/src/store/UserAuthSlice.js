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
            state.isAuthenticated = true;
            state.userData= action.payload.userData
        },
        logout: (state, action) => {

        }
    }
})

export const {login, logout} = userAuthSlice.actions;

export default userAuthSlice.reducer;