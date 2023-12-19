import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import DetailsMovie from "./Pages/DetailMovie";
import Footer from "./Component/Footer";
import PopularMovies from "./Pages/PopularMovies";
import SearchMovie from "./Pages/SearchMovie";
import TrailerMovie from "./Pages/TrailerMovie";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:movieId" element={<DetailsMovie />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/search" element={<SearchMovie />} />
          <Route path="/trailer/:movieId" element={<TrailerMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
