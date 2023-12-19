import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    const searchUrl = `/search?query=${searchQuery}&page=1`;

    navigate(searchUrl);
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    ),
      [];
  });

  return (
    <header
      className={`${
        isScrolled ? "shadow-sm bg-primary" : "shadow-none bg-transparent"
      } py-6 px-10 fixed w-full z-50`}
    >
      <nav className="flex flex-col justify-between items-center md:flex-row">
        <Link to="/" className="text-white font-bold flex items-end">
          <span className="text-6xl">M</span>
          <p className="text-3xl">ovielist</p>
        </Link>
        <div className="w-full relative mb-3 md:w-1/2 md:mb-0">
          <form action="search" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="What do you want to watch?"
              className="outline-none font-semibold text-md bg-white border-none ring-2 ring-slate-600 placeholder:text-slate-600 rounded-full border-white w-[100%] px-4 py-1 md:py-2"
            />
            <div className="absolute top-0 right-0 transform translate-y-1 md:translate-y-2 -translate-x-3 text-slate-600">
              <FaSearch size={25} />
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-2">
          <a
            href="/"
            className="px-3 py-1 md:px-6 md:py-2 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/"
            className="px-3 py-1 md:px-6 md:py-2 bg-white border-2 border-white text-black rounded-full font-bold hover:bg-transparent hover:text-white transition-all duration-300"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
