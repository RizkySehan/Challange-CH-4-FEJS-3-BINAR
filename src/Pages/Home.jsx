import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";
import Hero from "../Component/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovie } from "../redux/actions/movieActions";

function Home() {
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  const NO_IMAGE_PATH = import.meta.env.VITE_API_NO_IMG;
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const dispatch = useDispatch();
  const { popularMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getPopularMovie(setErrors, errors));
  }, []);
  return (
    <>
      <Hero />
      <main>
        <div className="max-w-screen-2xl mx-auto mb-8 ">
          <div>
            <div className="flex justify-between my-8 mx-4">
              <h1 className="font-bold text-2xl">Popular Movie</h1>
              <a
                className="italic text-red-600 hover:underline"
                href="/popular-movies"
              >
                See All Popular
              </a>
            </div>
            <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
              {popularMovie.map((movie) => (
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
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
