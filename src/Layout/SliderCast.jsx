import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";
import CastCard from "../Component/CastCard";

function SliderCast({ castCard, title }) {
  return (
    <div>
      <div className="flex justify-between my-8 mx-4">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
      </div>
      <div className="px-20">
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
