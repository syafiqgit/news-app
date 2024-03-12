import { Link, useLocation } from "react-router-dom";
import news_app from "../assets/news-svgrepo-com.svg";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="flex justify-around items-center p-5 bg-gray-950">
      <div className="flex justify-center items-center gap-2">
        <img src={news_app} alt="" className="md:w-14 w-7" />
        <p className="md:text-xl text-lg font-bold text-white">News App</p>
      </div>
      <div className="flex items-center gap-5 text-white md:text-lg text-base">
        <Link
          to="/"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Home
        </Link>
        <Link
          to="/business"
          className={`${
            pathname === "/business"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Business
        </Link>
        <Link
          to="/entertaiment"
          className={`${
            pathname === "/entertaiment"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Entertaiment
        </Link>
        <Link
          to="/general"
          className={`${
            pathname === "/general"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          General
        </Link>
        <Link
          to="/health"
          className={`${
            pathname === "/health"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Health
        </Link>
        <Link
          to="/science"
          className={`${
            pathname === "/science"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Science
        </Link>
        <Link
          to="/sports"
          className={`${
            pathname === "/sports"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Sports
        </Link>
        <Link
          to="/technology"
          className={`${
            pathname === "/technology"
              ? "border-b-[3px] border-b-white"
              : "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          } `}
        >
          Technology
        </Link>
      </div>
    </nav>
  );
}
