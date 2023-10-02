import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "../Component/MovieItem";

function Home() {
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
    <>
      <main>
        <div className="max-w-screen-2xl mx-4">
          <div>
            <div className="flex justify-between mb-8">
              <h1 className="font-bold">Popular Movie</h1>
              <a
                className="italic text-red-600 hover:underline"
                href="/popular-movies"
              >
                See All Popular
              </a>
            </div>
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
        </div>
      </main>
    </>
  );
}

export default Home;
