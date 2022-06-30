import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlide"


export default configureStore({
    reducer : {
        user: userReducer
    },
});