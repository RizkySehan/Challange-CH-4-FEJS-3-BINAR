import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import imageError from "../assets/error.png";

function MovieItem({ id, imgURL, title, vote_average, release_date }) {
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  return (
    <div className="relative overflow-hidden w-full">
      <img
        src={imgURL ? `${IMAGE_PATH_CARD}${imgURL}` : imageError}
        className="rounded-lg"
      />
      <div className="top-0 bottom-0 w-full absolute flex justify-center items-center flex-col bg-slate-900 opacity-0 hover:opacity-80 hover:rounded-lg duration-300 ">
        <h2 className="font-bold text-lg lg:text-2xl text-white text-center z-50">
          {title}
        </h2>
        <h2 className="font-bold lg:text-md text-yellow-400 text-center z-50">
          {vote_average}
        </h2>
        <h2 className="font-bold lg:text-md text-white text-center z-50">
          {release_date}
        </h2>
        <Link
          to={`/details/${id}`}
          className="cursor-pointer underline italic text-white mt-20 opacity-70 hover:font-semibold hover:opacity-100"
        >
          click to view detail
        </Link>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MovieItem;
