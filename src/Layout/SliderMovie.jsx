import { Link } from "react-router-dom";
import SwiperCard from "../Component/SwiperCard";
import PropTypes from "prop-types";

function SliderMovie({ swiperCard, title, link }) {
  return (
    <div>
      <div className="flex justify-between my-8 mx-5 md:mx-12">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <Link
          className="bg-gradient-to-r from-yellow-600 to-pink-600 py-1 px-2 rounded-xl text-white hover:scale-105 duration-300"
          to={`/all-${link}`}
        >
          {`See All ${title}`}
        </Link>
      </div>
      <div className="px-4">
        <SwiperCard swiperCard={swiperCard} />
      </div>
    </div>
  );
}

SliderMovie.propTypes = {
  swiperCard: PropTypes.array,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default SliderMovie;
