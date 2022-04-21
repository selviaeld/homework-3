import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import trackSlice from "./trackSlice";
import playlistSlice from "./playlistSlice";

const store = configureStore ({
    reducer: {
        token: tokenSlice,
        track: trackSlice,
        playlist: playlistSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store; 
