import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";

function SwiperCard({ swiperCard }) {
  return (
    <Swiper
      spaceBetween={4}
      grabCursor={true}
      slidesPerView={2}
      breakpoints={{
        576: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      {swiperCard.map((movie) => (
        <SwiperSlide key={movie?.id} className="w2/4">
          <MovieItem
            id={movie?.id}
            imgURL={movie?.poster_path}
            title={movie?.title}
            vote_average={`${movie?.vote_average?.toFixed(1)} / 10`}
            release_date={movie?.release_date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SwiperCard.propTypes = {
  swiperCard: PropTypes.array,
};

export default SwiperCard;
