import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieItem from "../Component/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie } from "../redux/actions/movieActions";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  const dispatch = useDispatch();
  const { searchMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getSearchMovie(query, page));
  }, [dispatch, query, page]);

  return (
    <div className="max-w-screen-2xl mx-auto mb-10 px-6 md:px-20">
      <h1 className="font-semibold text-3xl pt-24 md:pt-32 md:text-4xl mb-5 text-white">
        {`Search Result "${query}"`}
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 md:p-0 md:pt-5 lg:gap-0 lg:gap-y-5 xl:grid-cols-3 xl:gap-5 2xl:grid-cols-4 2xl:gap-9">
        {searchMovie.map((movie) => (
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
};

export default SearchMovie;
