//@ts-nocheck
import { useContext, useState } from "react";
import logo from "../assets/logo.jpeg";
import Genres from "./Genres";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { SearchResultContext } from "@/contex/searchResult.context";

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchResultContext);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);

    if (e.target.value.length === 0) {
      navigate(`/movies`);
    }
  };

  // console.log(searchText)

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
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

        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={"/movies"}>
              <div>Movies</div>
            </Link>
            <Link to={"/tvshows"}>
              <div>Tv Shows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
