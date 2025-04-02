import { Link } from "react-router-dom";

export const ListEpisode = ({ id, episodeId, animeId, episode }) => {
  return (
    <Link to={`/episode/${episodeId}?Id=${animeId}`}>
      <div className="lg:w-lg hover:bg-neutral-800 rounded-sm duration-200 ese-in-out flex gap-3 mb-4 pb-2 border-b-1 border-neutral-500">
        <div className="text-base md:text-xl font-medium bg-neutral-600 md:h-12 md:w-13 h-9 w-10 flex items-center justify-center rounded-sm">
          <p>{id + 1}</p>
        </div>
        <div className="flex items-center hover:text-yellow-500 w-full">
          <p className="font-semibold sm:text-base line-clamp-2 text-elipsis">{episode}</p>
        </div>
      </div>
    </Link>
  );
};
