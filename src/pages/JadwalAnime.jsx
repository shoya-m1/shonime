import useFetch from "../services/api";
import menheraChibi from "../assets/gif/menhera.gif";
import { useState, useEffect } from "react";
import { CardAnime } from "../components/CardAnime";

const JadwalAnime = () => {
  const { datas, loading } = useFetch("/schedule");
  const animes = datas?.data?.days || [];
  const [showAnime, setShowAnime] = useState("");
  useEffect(() => {
    if (datas?.data?.days?.length > 0) {
      setShowAnime(datas.data.days[0].day);
    }
  }, [datas]);
  return (
    <main className="pt-26 ">
      <div className="lg:m-auto px-1 mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
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
                <div onClick={() => setShowAnime(data.day)} className={`border border-neutral-600 hover:bg-yellow-500 cursor-pointer duration-200 py-1 px-7 ${showAnime == data.day && "bg-yellow-500 text-white"}`} key={i}>
                  {data.day}
                </div>
              ))}
            </section>
            <section className="mt-5  gap-1 md:px-5">
              {animes
                ?.filter((data) => data.day == showAnime)
                .map((data, i) => (
                  <div key={i}>
                    {/* <p className="pt-2 font-semibold text-yellow-300">{data.day}</p> */}
                    <ul id={data.day} key={i} className="border-b-1 w-full border-neutral-700 pb-2">
                      <div className="flex flex-wrap gap-2 justify-center mt-2">
                        {data?.animeList?.map((anime, i) => (
                          <CardAnime key={i} {...anime} />
                        ))}
                      </div>
                    </ul>
                  </div>
                ))}
            </section>
          </>
        )}
        <div className="h-5"></div>
      </div>
      <div className="h-15"></div>
    </main>
  );
};

export default JadwalAnime;
