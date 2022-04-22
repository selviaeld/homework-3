import {createSlice} from "@reduxjs/toolkit";

interface type {
    playlist: object
}

const initialState: type = {
    playlist: {}
}

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers:{
        getPlaylist: (state, action) => {
            state.playlist = action.payload;
        }
    }
})

export const {getPlaylist} = playlistSlice.actions;
export default playlistSlice.reducer; 
