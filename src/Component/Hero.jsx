import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovie } from "../redux/actions/movieActions";

import "../App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaPlay } from "react-icons/fa";

function Hero() {
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [slicing, setSlicing] = useState([]);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;

  const dispatch = useDispatch();
  const { trendingMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getTrendingMovie(setErrors, errors));
  }, [dispatch]);

  useEffect(() => {
    if (trendingMovie.length > 0) {
      setSlicing(trendingMovie.slice(0, 8));
    }
  }, [trendingMovie]);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      grabCursor={true}
      className="relative"
    >
      {slicing.map((movie) => (
        <SwiperSlide
          key={movie?.id}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(15,23,42, 0.8), rgba(15,23,42,0.6)), url('${IMAGE_PATH}${movie?.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`radiasi w-full min-h-screen flex justify-evenly items-center px-24 md:p-40 rounded-xl`}
        >
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white max-w-xl">
              {movie?.title}
            </h1>
            <div className="flex items-center gap-4 mb-2">
              <p className="text-yellow-400 text-2xl font-bold">
                {`${movie?.vote_average?.toFixed(1)} / 10`}
              </p>
              <p className="text-white text-2xl">|</p>
              <p className="text-white text-2xl font-semibold">{`${movie?.release_date}`}</p>
            </div>
            <p className="mb-8 text-sm sm:text-md md:text-lg text-white font-semibold max-w-2xl">
              {movie?.overview}
            </p>
            <Link
              to={`/trailer/${movie?.id}`}
              className="w-32 h-8 sm:w-36 sm:h-10 flex justify-center items-center gap-1 text-white  bg-gradient-to-r from-yellow-600 to-pink-600 rounded-full hover:scale-105 duration-300"
            >
              <FaPlay size={20} />
              <p className="text-sm sm:text-md font-semibold ">Trailer Movie</p>
            </Link>
          </div>
          <img
            src={`${IMAGE_PATH_CARD}${movie?.poster_path}`}
            alt="Card_Movie"
            className="brightness-50 rounded-xl hidden lg:block"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
