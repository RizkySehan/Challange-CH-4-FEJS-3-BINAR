import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import DetailsMovie from "./Pages/DetailMovie";
import TrendingMovies from "./Pages/TrendingMovie";
import Footer from "./Component/Footer";
import PopularMovies from "./Pages/PopularMovies";
import SearchMovie from "./Pages/SearchMovie";
import TrailerMovie from "./Pages/TrailerMovie";
import { Provider } from "react-redux";
import store from "./redux/store";
import TopRateMovies from "./Pages/TopRatedMovie";

function App() {
  return (
    <div className="bg-primary">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:movieId" element={<DetailsMovie />} />
            <Route path="/all-popular" element={<PopularMovies />} />
            <Route path="/all-trending" element={<TrendingMovies />} />
            <Route path="/all-top-rated" element={<TopRateMovies />} />
            <Route path="/search" element={<SearchMovie />} />
            <Route path="/trailer/:movieId" element={<TrailerMovie />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
