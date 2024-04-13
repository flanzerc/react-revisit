import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,

})

export default authSlice.reducer;