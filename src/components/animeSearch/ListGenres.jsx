import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ListGenres = ({ title, genreId }) => {
  const { id } = useParams();

  return (
    <Link
      to={`/genre/${genreId}`}
      className={`${
        id == genreId ? "bg-yellow-500" : ""
      } hover:bg-yellow-500 lg:mx-2 mx-1 lg:text-base md:text-[13px] text-[12px]  cursor-pointer hover:border-yellow-500 duration-200 border border-neutral-500 rounded-xl lg:px-10 px-3 py-2 items-center flex justify-center md:h-10`}
    >
      <p>{title}</p>
    </Link>
  );
};
