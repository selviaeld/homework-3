import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice ({
    name: "token",
    initialState: {
        token: "",
        user: {}
    },
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload;
        },
        getUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { getToken, getUser } = tokenSlice.actions;
export default tokenSlice.reducer;
