import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    const searchUrl = `/search?page=1&query=${searchQuery}`;

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
      } py-2 px-6 md:py-6 md:px-10 fixed w-full z-50`}
    >
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-white font-bold flex items-end">
          <span className="text-5xl md:text-6xl">M</span>
          <p className="text-3xl hidden md:block">ovielist</p>
        </Link>
        <div
          className={`w-full lg:w-8/12 flex flex-col lg:flex-row gap-y-2 md:gap-y-4 justify-between items-center opacity-0 lg:opacity-100 absolute lg:static left-0 p-4 md:p-7 lg:p-0 ${
            isScrolled ? "shadow-sm bg-primary" : "shadow-none bg-transparent"
          } ${
            nav
              ? "md:top-20 top-16 opacity-100 backdrop-blur-sm lg:backdrop-blur-none"
              : "top-[-500px]"
          }`}
        >
          <div className="w-full relative mb-3 lg:w-1/2 md:mb-0">
            <form action="search" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="What do you want to watch?"
                className="outline-none font-semibold text-md bg-white border-none ring-2 ring-slate-600 placeholder:text-slate-600 rounded-full border-white w-[100%] px-4 py-1 md:py-2"
              />
              <div className="absolute top-0 right-0 transform translate-y-1 md:translate-y-2 -translate-x-3 text-slate-600">
                <FaSearch size={25} />
              </div>
            </form>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="text-white cursor-pointer z-20 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
