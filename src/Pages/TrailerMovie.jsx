import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrailerMovie, getDetailMovie } from "../redux/actions/movieActions";

const TrailerMovie = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { trailerMovie, detailMovie } = useSelector((state) => state.movie);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL_HEADER;

  useEffect(() => {
    dispatch(getTrailerMovie(movieId));
    dispatch(getDetailMovie(movieId));
  }, [movieId]);

  return (
    <div className=" relative w-full min-h-screen">
      <img
        className="w-full h-screen bg-cover bg-no-repeat bg-center blur-sm"
        src={`${IMAGE_PATH}${detailMovie?.backdrop_path}`}
      />
      <iframe
        title={trailerMovie?.name}
        className="w-full h-full py-36 px-5 mt-10 md:px-16 md:py-28 xl:py-24 xl:px-52 absolute top-0 flex items-center justify-center"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerMovie;
