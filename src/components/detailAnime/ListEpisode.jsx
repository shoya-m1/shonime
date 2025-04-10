import { Link } from "react-router-dom";

export const ListEpisode = ({ id, episodeId, activeId, time, title }) => {
  return (
    <Link to={`/episode/${episodeId}`}>
      <div className="lg:w-lg hover:bg-neutral-800 rounded-sm duration-200 ese-in-out flex gap-3 mb-4 pb-2 border-b-1 border-neutral-500">
        <div className="text-base md:text-xl font-medium bg-neutral-600 md:h-12 md:w-13 h-10 w-12 flex items-center justify-center rounded-sm">
          <p>{id + 1}</p>
        </div>
        <div className="md:w-auto w-[85%]">
          <div className={`${activeId == episodeId ? "text-yellow-300" : ""} flex items-center hover:text-yellow-500 w-full`}>
            <p className="font-semibold sm:text-base line-clamp-2 text-elipsis">{title}</p>
          </div>
          <p className="text-sm text-neutral-500">{time}</p>
        </div>
      </div>
    </Link>
  );
};
