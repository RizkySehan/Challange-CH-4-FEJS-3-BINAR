import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trandingMovie: [],
  popularMovie: [],
  detailMovie: [],
  searchMovie: [],
  trailerMovie: [],
  similarMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrandingMovie: (state, action) => {
      state.trandingMovie = action.payload;
    },
    setPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    setTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setSimilarMovie: (state, action) => {
      state.similarMovie = action.payload;
    },
  },
});

export const {
  setTrandingMovie,
  setPopularMovie,
  setDetailMovie,
  setSearchMovie,
  setTrailerMovie,
  setSimilarMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
