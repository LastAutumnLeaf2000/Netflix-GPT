import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
