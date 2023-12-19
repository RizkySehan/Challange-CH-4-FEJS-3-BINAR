import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrandingMovie } from "../redux/actions/movieActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Hero() {
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [slicing, setSlicing] = useState([]);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;

  const dispatch = useDispatch();
  const { trandingMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getTrandingMovie(setErrors, errors));
  }, [dispatch]);

  useEffect(() => {
    if (trandingMovie.length > 0) {
      setSlicing(trandingMovie.slice(0, 8));
    }
  }, [trandingMovie]);

  return (
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slicing.map((movie) => (
        <SwiperSlide
          key={movie?.id}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('${IMAGE_PATH}${movie?.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`w-full min-h-screen flex justify-evenly items-center px-24 md:p-40`}
        >
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 text-white">
              {movie?.title}
            </h1>
            <div>
              <p className="text-yellow-400 text-2xl font-bold mb-2">
                {`${movie?.vote_average?.toFixed(1)} / 10`}
              </p>
            </div>
            <p className="mb-3 text-sm sm:text-md md:text-lg text-white font-semibold max-w-2xl">
              {movie?.overview}
            </p>
            <Link
              to={`/trailer/${movie?.id}`}
              className="w-32 h-8 sm:w-36 sm:h-10 flex justify-center items-center gap-1 bg-red-700 rounded-full hover:bg-red-600"
            >
              <img src="/play.svg" alt="play.svg" width="20px" height="20px" />
              <p className="text-white text-sm sm:text-md font-semibold ">
                Trailer Movie
              </p>
            </Link>
          </div>
          <img
            src={`${IMAGE_PATH_CARD}${movie?.poster_path}`}
            alt="Card_Movie"
            className="brightness-50 rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
