import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";

function SwiperCard({ swiperCard }) {
  return (
    <Swiper
      spaceBetween={10}
      grabCursor={true}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
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
