import useFetch from "../services/api";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import menheraChibi from "../assets/gif/menhera.gif";

const JadwalAnime = () => {
  const { datas, loading } = useFetch("/schedule");
  const animes = datas?.data?.days || [];
  return (
    <main className="pt-26 ">
      <div className="lg:m-auto px-2 mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <section className="w-full overflow-hidden m-auto h-10 md:h-12 bg-neutral-700 rounded-md flex justify-center items-center">
          <h1 className="font-bold md:text-xl text-elipsis line-clamp-1">Jadwal Anime</h1>
        </section>

        {loading ? (
          <span className="w-full bt-20 min-h-screen flex justify-center items-center">
            <img className="w-50" src={menheraChibi} alt="gif" />
          </span>
        ) : (
          <>
            <section className="mt-7 flex gap-3 w-full justify-center border-b-1 pb-6 border-neutral-600 flex-wrap">
              {animes?.map((data, i) => (
                <LinkScroll className="border border-neutral-600 hover:bg-yellow-500 cursor-pointer duration-200 py-1 px-7" key={i} to={data.day} smooth={true} spy={true} offset={-200} duration={1000}>
                  {data.day}
                </LinkScroll>
              ))}
            </section>
            <section className="mt-5 flex flex-col gap-1 md:px-5">
              {animes?.map((data, i) => (
                <div key={i}>
                  <p className="pt-2 font-semibold text-yellow-300">{data.day}</p>
                  <ul id={data.day} key={i} className="border-b-1 flex  flex-wrap md:flex-row flex-col w-full border-neutral-700 pb-2">
                    {data.animeList.map((anime, i) => (
                      <Link key={i} to={`/detail/${anime.animeId}`} className="py-1 md:w-[48%] w-full text-sm hover:text-yellow-300 cursor-pointer line-clamp-1 text-elipsis ">
                        {anime.title}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default JadwalAnime;
