import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const IMAGE_PATH = import.meta.env.VITE_API_IMGURL;

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;

        setPopularMovies(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
        }
        alert(error?.message);
      }
    };
    getPopularMovies();
  }, []);
  return (
    <div>
      <h1 className="text-center font-semibold text-4xl my-7">Popular Movie</h1>
      <div className="flex justify-center items-center flex-wrap max-w-screen-xl gap-5">
        {popularMovies.map((movie) => (
          <div key={movie?.id}>
            <MovieItem
              id={movie?.id}
              imgURL={`${IMAGE_PATH}${movie?.poster_path}`}
              title={movie?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
