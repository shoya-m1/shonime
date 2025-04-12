import { LuMonitorPlay } from "react-icons/lu";
import { Link } from "react-router-dom";

export const CardNewAnime = ({ poster, title, animeId, releasedOn, episodes }) => {
  return (
    <div className="relative max-w-40 md:max-w-72 h-28 md:h-48 rounded-lg overflow-hidden">
      <div className="flex  flex-col bg-neutral-900 shadow-2xs hover:shadow-lg focus:outline-hidden focus:shadow-lg transition">
        <img className="md:h-48 h-28 object-cover rounded-t-xl" src={poster} alt="Card Image" />
        <span className="absolute flex md:top-3 top-2 justify-between text-[9px] md:text-sm w-full">
          <p className="mt-1 py-1 md:ps-2 ps-1 mdpe-3 pe-2 bg-neutral-900/70 font-semibold bacdrop-blur-sm">{releasedOn}</p>
          <p className="mt-1 bg-neutral-900/70 flex items-center md:gap-2 gap-1 md:px-3 px-2 bacdrop-blur-sm">
            <LuMonitorPlay className="md:text-lg text-xs" /> {episodes}
          </p>
        </span>
        <div className="bottom-[-23px] flex w-full items-end hover:bottom-0 duration-200 ese-in-out absolute h-full">
          <div className="bg-gray-900/60 backdrop-blur-sm z-5 w-full h-14 md:px-2 md:py-2 py-1.5 px-1">
            <Link to={`/detail/${animeId}`}>
              <h3 className="hover:text-yellow-300 mt-0 md:text-[16px]/5 text-xs/5 font-semibold text-center text-neutral-200 line-clamp-2 text-ellipsis">{title}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
