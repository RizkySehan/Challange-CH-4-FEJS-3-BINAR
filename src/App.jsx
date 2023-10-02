import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import DetailsMovie from "./Pages/DetailMovie";
import Footer from "./Component/Footer";
import PopularMovies from "./Pages/PopularMovies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<DetailsMovie />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
