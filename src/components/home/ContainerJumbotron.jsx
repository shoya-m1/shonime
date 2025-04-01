import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ContainerJumbotron = ({ data }) => {
  return (
    <section className="relative overflow-hidden h-screen w-screen">
      <img className="absolute h-screen w-screen object-cover" src={data.imgPoster} alt="" />
      <span className="absolute z-1 w-screen h-screen bg-neutral-900/70"></span>
      <div className="px-10 mt-5 md:px-0 relative z-5 flex flex-col-reverse md:flex-row h-screen w-screen md:justify-around justify-center md:items-center items-center">
        <div className="md:w-2xl w-screen px-5 md:px-0 md:items-start items-center flex flex-col md:gap-3 gap-2 mt-5">
          <div className="flex gap-2 items-center text-sm md:text-[16px] text-[13px]">
            <p className="flex gap-1 items-center">
              <FaStar className="text-sm md:text-[16px] text-yellow-300" /> {data.rating}
            </p>
            |<p>{data.episodes} Episode</p> |<p>{data.releaseOn}</p>
          </div>
          <h1 className="text-2xl md:text-start text-center md:text-3xl lg:text-4xl font-semibold">{data.title}</h1>
          <p className="max-w-xl md:text-left text-center text-sm md:text-[16px] text-[13px] text-neutral-200">{data.synopsis}</p>
          <Link to={`/detail/${data.animeId}`}>
            <button
              type="button"
              className="py-2 mt-4 px-4 md:px-6 max-w-38 md:max-w-44 inline-flex items-center gap-x-2 md:text-[16px] text-[14px] font-medium rounded-full border border-transparent bg-yellow-600 text-white border-2 border-yellow-600 hover:border-yellow-600 hover:bg-transparent duration-200 ese-in-out cursor-pointer"
            >
              Tonton Sekarang
            </button>
          </Link>
        </div>
        <img className="h-58 lg:h-72 md:block lg:h-88 rounded-xl" src={data.imgThumb} alt="" />
      </div>
    </section>
  );
};
