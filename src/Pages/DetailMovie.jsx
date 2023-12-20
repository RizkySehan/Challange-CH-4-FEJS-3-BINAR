import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getCreditMovie,
  getDetailMovie,
  getRecomendMovie,
  getSimilarMovie,
} from "../redux/actions/movieActions";

import SwiperCard from "../Component/SwiperCard";
import SliderCast from "../Layout/SliderCast";
import "swiper/css";
import "../App.css";

import { FaRegCirclePlay } from "react-icons/fa6";

function DetailMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { detailMovie, similarMovie, recomendMovie, creditMovie } = useSelector(
    (state) => state.movie
  );

  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;

  useEffect(() => {
    dispatch(getDetailMovie(movieId));
    dispatch(getSimilarMovie(movieId));
    dispatch(getRecomendMovie(movieId));
    dispatch(getCreditMovie(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(15,23,42, 0.8), rgba(15,23,42,0.9)), url('${IMAGE_PATH}${detailMovie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="radiasi w-full min-h-screen flex flex-col justify-start items-center lg:justify-center gap-y-4 box-border pt-24 md:pt-32 lg:pt-0"
      >
        <div className="flex justify-center items-start md:container md:mx-auto md:pt-12 lg:pt-24 lg:px-5">
          <img
            src={`${IMAGE_PATH_CARD}${detailMovie?.poster_path}`}
            alt="Image.jpg"
            width="300px"
            className="rounded-xl hidden lg:block"
          />
          <div className="px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white md:mb-2">
              {detailMovie?.title}
            </h2>
            <p className="text-white font-semibold mb-1 md:mb-3 text-sm md:text-lg">{`Release: ${detailMovie?.release_date}`}</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex flex-col justify-center text-sm md:text-lg">
                <p className="text-yellow-400 font-bold">
                  {`${detailMovie?.vote_average?.toFixed(1)} / 10`}
                </p>
                {detailMovie?.tagline ? (
                  <p className=" text-white font-semibold mb-3">{`Tagline: "${detailMovie?.tagline}"`}</p>
                ) : (
                  <p className=" text-white font-semibold">{`Tagline: "Tagline Not Found"`}</p>
                )}
                <div className="flex justify-start items-center gap-1 md:gap-3 mb-4 md:mb-10">
                  {detailMovie?.genres?.map((genre) => (
                    <div key={genre?.id}>
                      <p className="rounded-lg italic font-semibold text-white py-0.2 px-2 md:px-3 bg-red-600 mt-2">
                        {genre?.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-start items-center font-bold gap-1 md:gap-2 mb-1 md:mb-0">
                <Link
                  to={`/trailer/${detailMovie?.id}`}
                  className="text-white/75 hover:text-white hover:scale-105 duration-500 text-2xl md:text-4xl lg:text-6xl"
                >
                  <FaRegCirclePlay />
                </Link>
                <div className="flex gap-2 text-lg md:text-3xl lg:text-4xl">
                  <span className="text-yellow-600/75">Watch</span>
                  <span className="text-pink-400/75">Trailer</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg md:text-2xl font-semibold mb-1 md:mb-2">
                Overview
              </h3>
              <p className="text-white text-sm md:text-base font-semibold max-w-2xl mb-5">
                {detailMovie?.overview}
              </p>
            </div>
            <div className="max-w-lg md:max-w-2xl lg:max-w-3xl hidden md:block">
              <SliderCast castCard={creditMovie} title="Top Cast" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-20 px-3 md:px-6">
        <div className="mb-10">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-8 px-1">
            Similar Movies
          </h1>
          <SwiperCard swiperCard={similarMovie} />
        </div>
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-8 px-1">
            Recomendation Movies
          </h1>
          <SwiperCard swiperCard={recomendMovie} />
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
