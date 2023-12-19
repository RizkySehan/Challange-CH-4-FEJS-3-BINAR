import axios from "axios";
import {
  setDetailMovie,
  setPopularMovie,
  setSearchMovie,
  setSimilarMovie,
  setTrailerMovie,
  setTrandingMovie,
} from "../reducers/movieReducer";

export const getTrandingMovie = (setErrors, errors) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/3/trending/movie/day?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;

    dispatch(setTrandingMovie(data?.results));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getPopularMovie = (setErrors, errors) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;

    dispatch(setPopularMovie(data?.results));
    setErrors({ ...errors, isError: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.response?.data?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getDetailMovie = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/3/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;

    dispatch(setDetailMovie(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};

export const getSimilarMovie = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/3/movie/${movieId}/similar?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;

    dispatch(setSimilarMovie(data?.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};

export const getSearchMovie =
  (query, page, setErrors, errors) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/search/movie?page=${page}&query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
          },
        }
      );
      const { data } = response;

      dispatch(setSearchMovie(data?.results));
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.message || error?.message,
        });
        return;
      }
      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };

export const getTrailerMovie = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/3/movie/${movieId}/videos?language=en-US}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;

    dispatch(setTrailerMovie(data?.results[0]));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};
