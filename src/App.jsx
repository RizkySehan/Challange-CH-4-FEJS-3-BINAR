import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import DetailsMovie from "./Pages/DetailMovie";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<DetailsMovie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
