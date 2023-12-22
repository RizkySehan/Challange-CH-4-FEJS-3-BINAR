import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";
import CastCard from "../Component/CastCard";

function SliderCast({ castCard, title }) {
  return (
    <div>
      <h1 className="text-white font-bold text-2xl mb-3">{title}</h1>
      <div className="">
        <Swiper
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {castCard.map((cast) => (
            <SwiperSlide key={cast.id} className="flex flex-col justify-center">
              <CastCard
                profile_path={cast?.profile_path}
                name={cast?.name}
                character={cast?.character}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

SliderCast.propTypes = {
  castCard: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SliderCast;
