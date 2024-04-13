import {configureStore} from "@reduxjs/toolkit"
import userAuthSlice from "./UserAuthSlice"

const store = configureStore({
    reducer: {
        auth: userAuthSlice
    }
})

export default store