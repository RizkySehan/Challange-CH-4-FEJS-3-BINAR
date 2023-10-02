import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailsMovie() {
  const { movieId } = useParams();

  useEffect(() => {}, []);
  return <div>{movieId}</div>;
}

export default DetailsMovie;
