import { useParams } from "react-router-dom";
import menheraChibi from "../assets/gif/menhera-chibi.gif";
import { AnimeInfo } from "../components/detailAnime/AnimeInfo";
import { ContainerSynopsis } from "../components/detailAnime/ConteinerSynopsis";
import useFetch from "../services/api";
import { TableDownload } from "../components/animeStreaming/TableDownload";

const DetailBatch = () => {
  const { id } = useParams();
  const { datas, loading, error } = useFetch(`/batch/${id}`);
  const animeData = datas?.data || [];
  const paragraf = animeData?.synopsis || "";

  return (
    <main className="pt-26 min-h-screen">
      <div className="lg:m-auto min-h-screen px-3 mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <div className="w-full overflow-hidden m-auto h-10 md:h-12 bg-neutral-700 rounded-md flex justify-center items-center">
          <h1 className="font-bold md:text-xl text-elipsis line-clamp-1">Detail Batch</h1>
        </div>

        {loading ? (
          <span className="w-full bt-20 min-h-screen flex justify-center items-center">
            <img className="w-50" src={menheraChibi} alt="gif" />
          </span>
        ) : (
          <>
            <AnimeInfo animes={animeData} animeId={id} />
            <ContainerSynopsis paragraf={paragraf} />

            <section className="mt-5">
              <h2 className="font-semibold md:text-2xl text-lg">
                Download <span className="text-yellow-300">Batch</span>
              </h2>
              <p className="text-sm md:text-base mt-3">Password RAR = "Samehadaku.care"</p>
              <TableDownload downloads={animeData?.downloadUrl?.formats} />
            </section>
          </>
        )}
        <div className="h-5"></div>
      </div>
      <div className="h-10"></div>
    </main>
  );
};
export default DetailBatch;
