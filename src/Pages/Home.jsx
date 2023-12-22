import { useEffect, useState } from "react";
import Hero from "../Component/Hero";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovie,
  getTopRateMovie,
  getTrendingMovie,
} from "../redux/actions/movieActions";
import "swiper/css";
import SliderMovie from "../Layout/SliderMovie";

function Home() {
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const dispatch = useDispatch();
  const { popularMovie, trendingMovie, topRateMovie } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getPopularMovie(setErrors, errors));
    dispatch(getTrendingMovie(setErrors, errors));
    dispatch(getTopRateMovie(setErrors, errors));
  }, [dispatch, errors]);
  return (
    <>
      <Hero />
      <main>
        <div className="lg:container lg:mx-auto mb-10">
          <SliderMovie
            title="Trending"
            link="trending"
            swiperCard={trendingMovie}
          />
          <SliderMovie
            title="Popular"
            link="popular"
            swiperCard={popularMovie}
          />
          <SliderMovie
            title="Top Rated"
            link="top-rated"
            swiperCard={topRateMovie}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
