import { useParams } from "react-router-dom";
import menheraChibi from "../assets/gif/menhera-chibi.gif";
import { AnimeInfo } from "../components/detailAnime/AnimeInfo";
import { ContainerSynopsis } from "../components/detailAnime/ConteinerSynopsis";
import { ListEpisode } from "../components/detailAnime/ListEpisode";
import { Link } from "react-router-dom";
import useFetch from "../services/api";
import useStream from "../services/apiStream";

const DetailAnime = () => {
  const { id } = useParams();
  const { animes: datas, loading, error } = useStream(`/anime/${id}`);
  const animeData = datas?.data || [];
  const paragraf = animeData?.synopsis || "";

  return (
    <main className="pt-26 min-h-screen">
      <div className="lg:m-auto min-h-screen px-3 mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <div className="w-full overflow-hidden m-auto h-10 md:h-12 bg-neutral-700 rounded-md flex justify-center items-center">
          <h1 className="font-bold md:text-xl text-elipsis line-clamp-1">Detail Anime</h1>
        </div>

        {loading ? (
          <span className="w-full bt-20 min-h-screen flex justify-center items-center">
            <img className="w-50" src={menheraChibi} alt="gif" />
          </span>
        ) : (
          <>
            <AnimeInfo animes={animeData} animeId={id} />
            <ContainerSynopsis paragraf={paragraf} />
            {animeData?.batchList?.length > 0 && (
              <section className="mt-5">
                <h2>Download batch</h2>
                {animeData?.batchList?.map((batch, i) => (
                  <Link key={i} to={`/batch/${batch?.batchId}`}>
                    <p className="mt-2 text-sm md:text-base text-yellow-400 hover:text-neutral-300 cursor-pointer">{batch?.title}</p>
                  </Link>
                ))}
              </section>
            )}
            <section className="mt-5">
              <h2 className="font-semibold md:text-2xl text-lg mb-2">Daftar Episode</h2>
              <ol className="flex flex-wrap max-h-150 overflow-y-scroll overflow-hidden gap-2 mt-6">
                {animeData?.episodeList
                  ?.slice()
                  .reverse()
                  .map((episode, i) => (
                    <ListEpisode key={i} {...episode} animeId={id} id={i} />
                  ))}
              </ol>
            </section>
          </>
        )}
        <div className="h-5"></div>
      </div>
      <div className="h-10"></div>
    </main>
  );
};
export default DetailAnime;
