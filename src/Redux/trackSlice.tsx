import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../Types/trackType";

interface trackType {
  track: Track[],
  selected: Track[]
}

const initialState: trackType = {
  track: [],
  selected: []
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    storeTrack: (state, action) => {
      state.track = action.payload;
    },
    trackSelect: (state, action) => {
      state.selected = action.payload;
    },
    trackDeselect: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const { storeTrack, trackSelect, trackDeselect } = trackSlice.actions;
export default trackSlice.reducer;
