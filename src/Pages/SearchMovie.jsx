import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../Component/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie } from "../redux/actions/movieActions";

const SearchMovie = () => {
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  const dispatch = useDispatch();
  const searchMovie = useSelector((state) => state.movie);

  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  const NO_IMAGE_PATH = import.meta.env.VITE_API_NO_IMG;

  useEffect(() => {
    dispatch(getSearchMovie(query, page, errors, setErrors));
  }, [dispatch, query, page]);

  // Foreach or map every object of movies array
  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <h1 className="font-semibold text-3xl pt-48 ml-6 md:text-4xl md:ml-10 md:pt-28 mb-5 text-red-600">
        {`Search Result "${query}"`}
      </h1>
      {errors.isError ? (
        <div className="text-red-600 text-center font-bold mb-4">
          {errors.message}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
          {searchMovie.map((movie) => (
            <div key={movie?.id}>
              <MovieItem
                id={movie?.id}
                imgURL={
                  movie?.poster_path
                    ? `${IMAGE_PATH_CARD}${movie.poster_path}`
                    : `${NO_IMAGE_PATH}`
                }
                title={movie?.title}
                vote_average={`${movie?.vote_average?.toFixed(1)} / 10`}
                release_date={movie?.release_date}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
