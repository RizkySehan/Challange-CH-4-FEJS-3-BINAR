import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchMovies = () => {
  // Create state for movies that have been searched
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const query = searchParams.get("query");
        // Get the data from API with query and page variable
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie?query=${query}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        // Set state for the movie that have been searched
        const { data } = response;
        setSearchMovie(data?.results);
        console.log(searchMovie);
      } catch (error) {
        console.error(error);
      }
    };
    getSearchMovie();
  }, [searchParams]);

  // Foreach or map every object of movies array
  return <div>SearchMovies</div>;
};

export default SearchMovies;
