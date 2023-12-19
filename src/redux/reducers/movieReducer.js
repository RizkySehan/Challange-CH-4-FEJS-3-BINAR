import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovie: [],
  popularMovie: [],
  topRateMovie: [],
  detailMovie: [],
  searchMovie: [],
  trailerMovie: [],
  similarMovie: [],
  recomendMovie: [],
  creditMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrendingMovie: (state, action) => {
      state.trendingMovie = action.payload;
    },
    setPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    setTopRateMovie: (state, action) => {
      state.topRateMovie = action.payload;
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
    setRecomendMovie: (state, action) => {
      state.recomendMovie = action.payload;
    },
    setCreditMovie: (state, action) => {
      state.creditMovie = action.payload;
    },
  },
});

export const {
  setTrendingMovie,
  setPopularMovie,
  setTopRateMovie,
  setDetailMovie,
  setSearchMovie,
  setTrailerMovie,
  setSimilarMovie,
  setRecomendMovie,
  setCreditMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
