import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovie, getSimilarMovie } from "../redux/actions/movieActions";
import MovieItem from "../Component/MovieItem";

function DetailMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { detailMovie, similarMovie } = useSelector((state) => state.movie);

  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;

  useEffect(() => {
    dispatch(getDetailMovie(movieId));
    dispatch(getSimilarMovie(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('${IMAGE_PATH}${detailMovie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full min-h-screen flex justify-center items-center gap-8 px-24 md:p-40"
      >
        <img
          src={`${IMAGE_PATH_CARD}${detailMovie?.poster_path}`}
          alt="Image.jpg"
          className="rounded-xl"
        />
        <div className="">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {detailMovie?.title}
          </h2>
          <p className="text-white font-semibold mb-3">{`Release: ${detailMovie?.release_date}`}</p>
          <p className="text-yellow-400 font-bold">
            {`${detailMovie?.vote_average?.toFixed(1)} / 10`}
          </p>
          {detailMovie?.tagline ? (
            <p className=" text-white font-semibold mb-3">{`Tagline: "${detailMovie?.tagline}"`}</p>
          ) : (
            <p className=" text-white font-semibold">{`Tagline: "Tagline Not Found"`}</p>
          )}
          <div className="flex justify-start items-center gap-3 mb-3">
            {detailMovie?.genres?.map((genre) => (
              <div key={genre?.id}>
                <p className="rounded-lg italic font-semibold text-white py-0.2 px-3 bg-red-600">
                  {genre?.name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white font-semibold max-w-lg">
            {detailMovie?.overview}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {similarMovie.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              imgURL={`${IMAGE_PATH_CARD}${movie?.poster_path}`}
              title={movie?.title}
              vote_average={`${movie?.vote_average} / 10`}
              release_date={movie?.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailMovie;
