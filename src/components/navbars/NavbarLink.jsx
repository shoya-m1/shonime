import { NavLink, useLocation } from "react-router-dom";

export const NavbarLink = () => {
  const location = useLocation().pathname;
  return (
    <div className="flex gap-3 md:flex-row flex-col">
      <NavLink
        to="/"
        className={` ${
          location === "/" ? "md:border-b-2 border-yellow-300 text-yellow-300 " : "text-neutral-400"
        } md:border-b-2 border-neutral-900  py-1 duration-200 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0  hover:text-yellow-300 focus:outline-hidden`}
      >
        Home
      </NavLink>
      <NavLink
        to="/daftar-anime/"
        className={` ${
          location === "/daftar-anime/" ? "md:border-b-2 border-yellow-300 text-yellow-300" : "text-neutral-400"
        } md:border-b-2 whitespace-nowrap border-neutral-900 py-1 duration-200 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0  hover:text-yellow-300 focus:outline-hidden`}
      >
        Daftar Anime
      </NavLink>
      <NavLink
        to="/jadwal/"
        className={` ${
          location === "/jadwal/" ? "md:border-b-2 border-yellow-300 text-yellow-300 " : "text-neutral-400"
        } md:border-b-2 whitespace-nowrap border-neutral-900 py-1 duration-200 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0  hover:text-yellow-300 focus:outline-hidden`}
      >
        Jadwal Rilis
      </NavLink>
      <NavLink
        to="/favorite/"
        className={` ${
          location === "/favorite/" ? "md:border-b-2 border-yellow-300 text-yellow-300 " : "text-neutral-400"
        } md:border-b-2 border-neutral-900 py-1 duration-200 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0  hover:text-yellow-300 focus:outline-hidden`}
      >
        Favorite
      </NavLink>
    </div>
  );
};
