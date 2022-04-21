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
        login: (state, action) => {
          state.user = action.payload;
        }
    }
});

export default tokenSlice.reducer;
export const { getToken, login } = tokenSlice.actions;
