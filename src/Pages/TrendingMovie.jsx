import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";
import { getTrendingMovie } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";

function TrendingMovies() {
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const dispatch = useDispatch();
  const { trendingMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getTrendingMovie(setErrors, errors));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <h1 className="text-white text-center font-semibold text-4xl pt-24 mb-5">
        Trending Movie
      </h1>
      <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
        {trendingMovie.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              imgURL={`${IMAGE_PATH_CARD}${movie?.poster_path}`}
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

export default TrendingMovies;
