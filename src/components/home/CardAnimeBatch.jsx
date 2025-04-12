import { LuMonitorPlay } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardAnimeBatch = ({ title, poster, releasedOn, episodes, batchId }) => {
  return (
    <div className="flex w-full md:w-lg lg:w-xl gap-4">
      <div className="w-[30%] h-28 overflow-hidden rounded-sm">
        <img className="w-full h-28 object-cover" src={poster} alt="" />
      </div>
      <div className="w-[80%]">
        <Link to={`/batch/${batchId}`}>
          <h4 className="font-semibold md:text-lg line-clamp-2 cursor-pointer text-ellipsis hover:text-yellow-400">{title}</h4>
        </Link>
        <span className="flex items-center gap-1 mt-2 text-neutral-400 text-sm md:text-base">
          <LuMonitorPlay className="me-2" /> <p className="font-semibold">Episode :</p> {episodes}
        </span>
        <span className="flex items-center gap-1 text-neutral-400 text-sm md:text-base">
          <FaRegCalendarAlt className="me-2" /> <p className="font-semibold">Release :</p> {releasedOn}
        </span>
      </div>
    </div>
  );
};
