import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const AnimeInfo = ({ animes }) => {
  // const formattedTitle = animeId.replaceAll("-", " ");
  return (
    <section className="mt-5 flex md:flex-row flex-col items-center md:gap-10 gap-5">
      <img className="max-h-82 md:w-xs sm:w-62 w-44 rounded-sm" src={animes?.poster} alt="img-animes" />
      <div className="w-full">
        <h2 className="md:text-2xl text-xl md:text-start text-center font-semibold border-b-1 border-neutral-700 pb-5 ">{animes?.title}</h2>
        <ul className="flex md:text-base md:justify-start justify-center mt-4 items-center gap-4 border-b-1 border-neutral-700 pb-4 text-sm">
          {animes?.score && (
            <li className="flex items-center gap-2 border-r-1 border-neutral-400 pe-3">
              <FaStar className="text-yellow-300" /> {animes?.score}
            </li>
          )}
          <li className="flex items-center gap-2 border-r-1 border-neutral-400 pe-3">{animes?.aired}</li>
          <li className="flex items-center gap-2 "> {animes?.episodes} Episode</li>
        </ul>
        <ul className="mt-4 flex gap-10 md:text-base text-sm">
          <div className="flex flex-col gap-2">
            <li className="font-semibold">Status</li>
            <li className="font-semibold">Japanese</li>
            <li className="font-semibold">Durasi</li>
            <li className="font-semibold">Produser</li>
            <li className="font-semibold">Studio</li>
            <li className="font-semibold">Genre</li>
          </div>
          <div className="flex flex-col gap-2">
            <li className="text-neutral-400 text-elipsis line-clamp-1">: {animes?.status}</li>
            <li className="text-neutral-400 text-elipsis line-clamp-1">: {animes?.japanese}</li>
            <li className="text-neutral-400 text-elipsis line-clamp-1">: {animes?.duration}</li>
            <li className="text-neutral-400 text-elipsis line-clamp-1">: {animes?.producers}</li>
            <li className="text-neutral-400 text-elipsis line-clamp-1">: {animes?.studios}</li>
            <li className="text-neutral-400 flex flex-wrap gap-2 text-sm">
              :
              {animes?.genreList?.map((genre, i) => (
                <Link to={`/genre/${genre?.genreId}`} className="border px-3 py-1 border-neutral-700 hover:bg-yellow-500 hover:text-neutral-100" key={i}>
                  {genre?.title}
                </Link>
              ))}
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
