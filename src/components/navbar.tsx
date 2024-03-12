import news_app from "../assets/news-svgrepo-com.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-5 bg-gray-950">
      <div className="flex justify-center items-center gap-2">
        <img src={news_app} alt="" className="md:w-14 w-7" />
        <p className="md:text-xl text-lg font-bold text-white">News App</p>
      </div>
      <div className="flex items-center gap-5 text-white md:text-lg text-base">
        <a
          href="/"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Home
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Business
        </a>
        <a
          href="/entertaiment"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Entertaiment
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          General
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Health
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Science
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Sports
        </a>
        <a
          href="/business"
          className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          Technology
        </a>
      </div>
    </nav>
  );
}
