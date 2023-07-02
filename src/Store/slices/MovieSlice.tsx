import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: [],
  newDisney: [],
  originals: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.recommended = action.payload.recommended;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
