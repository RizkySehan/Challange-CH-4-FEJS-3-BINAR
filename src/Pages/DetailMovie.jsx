import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailMovie() {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL;

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie/${movieId}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setDetailMovie(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
        }
        alert(error?.message);
      }
    };
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url('${IMAGE_PATH}${detailMovie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen"
    >
      <div className="flex items-center flex-col md:flex-row pt-52 md:p-52 md:gap-10 ">
        <img
          src={`${IMAGE_PATH}${detailMovie?.poster_path}`}
          alt="Image.jpg"
          width="250px"
          height="250px"
          className="rounded-lg mb-4"
        />
        <div className="flex flex-col p-5 max-w-6xl min-w-min mb-40 md:mb-0">
          <h2 className="text-4xl font-bold mb-3 text-white">
            {detailMovie?.title}
          </h2>
          <p className="text-yellow-400">
            {`${detailMovie?.vote_average?.toFixed(1)} / 10`}
          </p>
          {detailMovie?.tagline ? (
            <p className=" text-white font-semibold">{`Tagline: "${detailMovie?.tagline}"`}</p>
          ) : (
            <p className=" text-white font-semibold">{`Tagline: "Tagline Not Found"`}</p>
          )}
          <div className="flex justify-start items-center gap-1">
            {detailMovie?.genres?.map((genre) => (
              <div key={genre?.id}>
                <p className="p-1 rounded-lg italic font-semibold text-red-500">
                  {genre?.name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white font-semibold">{detailMovie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
