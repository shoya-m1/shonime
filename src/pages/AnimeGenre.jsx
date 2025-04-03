import { ListGenres } from "../components/animeSearch/ListGenres";
import { RiListIndefinite } from "react-icons/ri";
import { useSearchParams, useParams } from "react-router-dom";
import useFetch from "../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { CardAnime } from "../components/CardAnime";
import Pagination from "../components/Pagination";
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
    partialVisibilityGutter: 12,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 5,
    partialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: { max: 540, min: 356 },
    items: 3,
    partialVisibilityGutter: 15,
  },
  minimobile: {
    breakpoint: { max: 356, min: 0 },
    items: 2,
    partialVisibilityGutter: 15,
  },
};

const AnimeGenre = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { datas, loading, error } = useFetch(`/genres/${id}/?page=${page}`);
  const { datas: genres, loading: genresLoading, error: genresError } = useFetch(`/genres`);
  const listDataGenre = genres?.data?.genreList || [];
  const [animes, setAnimes] = useState([]);
  const pagination = datas?.pagination || {};

  useEffect(() => {
    if (!error) {
      setAnimes(datas?.data?.animeList);
    } else {
      setAnimes([]);
    }
  }, [datas]);

  const [selectGenre, setSelectGenre] = useState(false);

  return (
    <main className="pt-26">
      <section className="lg:m-auto min-h-screen mx-2 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <div className="w-full px-2 md:px-6 border-b-1 border-neutral-700 pb-3 md:text-xl">
          <h2 className="font-semibold line-clamp-1 text-elipsis">Search Genre : {id}</h2>
        </div>
        <ul className="mt-5 md:px-4 relative mx-2 pr-6 md:pr-8">
          <Carousel className="" arrows={false} partialVisible centerMode={false} draggable focusOnSelect={false} keyBoardControl minimumTouchDrag={80} responsive={responsive} swipeable infinite={false}>
            {listDataGenre.slice(0, 7).map((genre) => (
              <ListGenres key={genre.genreId} {...genre} />
            ))}
          </Carousel>
          <div onClick={() => setSelectGenre(!selectGenre)} className="absolute right-5 md:right-7 cursor-pointer top-0 md:w-10 w-7 h-full flex items-center ps-2 bg-neutral-900 md:text-3xl text-2xl">
            <RiListIndefinite />
          </div>
        </ul>
        <div className={`${selectGenre ? "opacity-100 z-10" : "opacity-0 -z-1"} duration-200 ese-in-out relative`}>
          <ul className="absolute flex flex-wrap mt-5 gap-y-4 bg-neutral-800 py-6 rounded-sm px-3">
            {listDataGenre?.map((genre) => (
              <button key={genre.genreId} onClick={() => setSelectGenre(!selectGenre)}>
                <ListGenres {...genre} />
              </button>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-5">{animes?.length > 0 ? animes.map((anime, i) => <CardAnime key={i} {...anime} />) : <p className="text-neutral-200"> Data tidak ditemukan</p>}</div>

        <Pagination pagination={pagination} />
     
        <div className="h-30"></div>
      </section>
      <div className="h-30"></div>
    </main>
  );
};

export default AnimeGenre;
