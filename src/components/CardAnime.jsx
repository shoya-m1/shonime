import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LuMonitorPlay } from "react-icons/lu";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../context/FavoritesContext";

export const CardAnime = ({ title, animeId, poster, score, episodes, status, releaseDay }) => {
  const { favoriteAnimes, toggleFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInFavorites = favoriteAnimes.some((item) => item.animeId === animeId);
    setIsFavorite(isInFavorites);
  }, [animeId, favoriteAnimes]);

  const handleFavoriteToggle = () => {
    const anime = { title, animeId, poster, score, episodes, status, releaseDay };
    toggleFavorite(anime);
  };

  return (
    <div className="relative md:w-48 w-40 h-52 md:h-65 rounded-lg overflow-hidden">
      <div className="flex flex-col bg-neutral-900 shadow-2xs hover:shadow-lg focus:outline-hidden focus:shadow-lg transition">
        <img className="object-cover rounded-t-xl" src={poster} alt={title} />

        <span className="absolute flex md:top-3 top-3 justify-between text-[12px] md:text-sm w-full">
          {episodes && (
            <p className="mt-1 bg-neutral-900/70 flex py-1 items-center md:gap-2 gap-1 md:px-3 px-1 bacdrop-blur-sm">
              <LuMonitorPlay className="md:text-lg text-sm" /> {episodes}
            </p>
          )}

          {releaseDay && <p className="mt-1 py-1 md:ps-2 md:pe-3 px-2 bg-neutral-900/80 font-semibold bacdrop-blur-sm">{releaseDay}</p>}
          {status && <p className="mt-1 py-1 md:ps-2 ps-1 md:pe-3 pe-1 bg-neutral-900/80 font-semibold bacdrop-blur-sm">{status}</p>}
          {score && (
            <p className="mt-1 bg-neutral-900/70 flex items-center md:gap-1 gap-1 md:px-3 px-1 bacdrop-blur-sm">
              <FaStar className="md:text-sm text-xs text-yellow-300" /> {score}
            </p>
          )}
        </span>
        <button onClick={handleFavoriteToggle} className="absolute top-[45%] z-3 md:text-lg duration-200 ese-in-out cursor-pointer text-sm right-2 bg-neutral-900/60 p-2 rounded-full hover:bg-neutral-700">
          {isFavorite ? <FaHeart className="text-yellow-300" /> : <FaRegHeart className="text-white" />}
        </button>

        <div className="md:bottom-[-23px] bottom-[-19px] flex w-full items-end hover:bottom-0 duration-200 ese-in-out absolute h-full">
          <Link to={`/detail/${animeId}`} className="bg-gray-900/60 backdrop-blur-xs z-5 w-full md:h-14 h-11 md:px-2 md:py-2 py-1.5 px-1">
            <h3 className="hover:text-yellow-300 mt-0 md:text-[16px]/5 text-sm/4 font-semibold text-center text-neutral-200 line-clamp-2 text-ellipsis">{title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
