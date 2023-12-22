import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";
import { getTopRateMovie } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";

function TopRateMovies() {
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const dispatch = useDispatch();
  const { topRateMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getTopRateMovie(setErrors, errors));
  }, [dispatch, errors]);

  return (
    <div className="max-w-screen-2xl mx-auto mb-10 px-6 md:px-20">
      <h1 className="font-semibold text-3xl pt-24 md:pt-32 md:text-5xl mb-5 text-white text-center">
        Top Rated Movie
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 md:p-0 md:pt-5 lg:gap-0 lg:gap-y-5 xl:grid-cols-3 xl:gap-5 2xl:grid-cols-4 2xl:gap-9">
        {topRateMovie.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              imgURL={movie?.poster_path}
              title={movie?.title}
              vote_average={`${movie?.vote_average?.toFixed(1)} / 10`}
              release_date={movie?.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRateMovies;
