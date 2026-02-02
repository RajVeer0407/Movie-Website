//@ts-nocheck
import { useContext, useState } from "react";
import logo from "../assets/logo.jpeg";
import Genres from "./Genres";
import { Input } from "./ui/input";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchResultContext } from "@/contex/searchResult.context";

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchResultContext);
  const [open, setOpen] = useState(false);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) {
      navigate("/movies");
    } else {
      navigate(`/search/${searchText}`);
    }
  };

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-semibold underline" : "opacity-80 hover:opacity-100";

  return (
    <div className="relative flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9 hover:opacity-80 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchText}
            onChange={handelChange}
          />
        </form>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-full border text-sm hover:opacity-80"
        >
          {theme === "light" ? "🌙" : "☀"}
        </button>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="md:flex hidden gap-6 items-center">
          <Genres />
          <NavLink to="/movies" className={activeClass}>
            Movies
          </NavLink>
          <NavLink to="/tvshows" className={activeClass}>
            Tv Shows
          </NavLink>
        </div>
      </div>

      {open && (
        <div className="absolute top-16 right-5 flex flex-col gap-3 bg-background border p-4 rounded-xl md:hidden">
          <Genres />
          <NavLink to="/movies" className={activeClass} onClick={() => setOpen(false)}>
            Movies
          </NavLink>
          <NavLink to="/tvshows" className={activeClass} onClick={() => setOpen(false)}>
            Tv Shows
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
