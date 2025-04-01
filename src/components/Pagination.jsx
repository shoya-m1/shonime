import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ pagination }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage, hasPrevPage, prevPage, hasNextPage, nextPage, totalPages } = pagination;

  const goToPage = (page) => {
    searchParams.set("page", page); // Set query param "page"
    setSearchParams(searchParams); // Update URL
  };

  return (
    <div className="flex items-center gap-2 mt-5 justify-center">
      <button onClick={() => goToPage(prevPage)} disabled={!hasPrevPage} className={`px-4 py-2  rounded-sm text-white ${hasPrevPage ? "cursor-pointer bg-yellow-500" : "bg-neutral-900 cursor-not-allowed border border-neutral-600"}`}>
        Prev
      </button>

      {[...Array(totalPages).keys()].slice(Math.max(0, currentPage - 3), currentPage + 2).map((page) => (
        <button key={page + 1} onClick={() => goToPage(page + 1)} className={`px-4 py-2 cursor-pointer hover:bg-yellow-500 rounded-sm text-white ${currentPage === page + 1 ? "bg-yellow-500" : "bg-neutral-900 border border-neutral-600"}`}>
          {page + 1}
        </button>
      ))}

      <button
        onClick={() => goToPage(nextPage)}
        disabled={!hasNextPage}
        className={`px-4 py-2 cursor-pointer rounded-md text-white ${hasNextPage ? "cursor-pointer bg-yellow-500" : "bg-neutral-900 border border-neutral-600 cursor-not-allowed"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
