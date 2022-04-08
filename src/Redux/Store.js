import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import selectedSlice from "./selectedSlice";

export default configureStore ({
    reducer: {
        token: tokenSlice,
        user: userSlice,
        selected: selectedSlice
    },
});
