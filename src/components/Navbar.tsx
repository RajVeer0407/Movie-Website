import logo from "../assets/logo.jpeg";
import Genres from "./Genres";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img src={logo} alt="logo" className="md:h-14 sm:h-9 h-9 hover:opacity-80 cursor-pointer" />
      <div className="flex gap-3 items-center">
        <form action="">
          <Input placeholder="search" className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"/>
        </form>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres/>
            <Link to={'/movies'}>
            <div>Movies</div>
            </Link>
            <Link to={'/tvshows'}>
            <div>Tv Shows</div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar