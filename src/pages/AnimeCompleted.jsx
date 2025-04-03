import useFetch from "../services/api";
import { CardAnime } from "../components/CardAnime";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

export const AnimeCompleted = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { datas } = useFetch(`/completed/?page=${page}`);
  const animes = datas?.data?.animeList || [];
  const pagination = datas?.pagination || {};

  return (
    <main className="pt-26">
      <section className="lg:m-auto min-h-screen mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <div className="w-full px-2 md:px-6 pb-3 md:text-xl">
          <h2 className="font-semibold line-clamp-1 text-elipsis">
            Anime <span className="text-yellow-300">Complated</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {animes?.map((anime, i) => (
            <CardAnime key={i} {...anime} />
          ))}
        </div>
        <Pagination pagination={pagination} />
        <div className="h-10"></div>
      </section>
      <div className="h-10"></div>
    </main>
  );
};
