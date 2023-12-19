import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
        className="radiasi w-full flex flex-col justify-center items-center gap-y-4 box-border"
      >
        <div className="flex justify-center items-start gap-8 container mx-auto pt-24">
          <img
            src={`${IMAGE_PATH_CARD}${detailMovie?.poster_path}`}
            alt="Image.jpg"
            width="300px"
            className="rounded-xl"
          />
          <div>
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
            <div className="flex justify-start items-center gap-3 mb-10">
              {detailMovie?.genres?.map((genre) => (
                <div key={genre?.id}>
                  <p className="rounded-lg italic font-semibold text-white py-0.2 px-3 bg-red-600">
                    {genre?.name}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">
                Overview
              </h3>
              <p className="text-white font-semibold max-w-2xl">
                {detailMovie?.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full">
          <SliderCast castCard={creditMovie} title="Cast" />
        </div>
      </div>
      <div className="mx-auto p-20">
        <h1 className="text-white text-2xl font-bold mb-6">Similar Movies</h1>
        <SwiperCard swiperCard={similarMovie} />
        <h1 className="text-white text-2xl font-bold mb-6">
          Recomendation Movies
        </h1>
        <SwiperCard swiperCard={recomendMovie} />
      </div>
    </div>
  );
}

export default DetailMovie;
