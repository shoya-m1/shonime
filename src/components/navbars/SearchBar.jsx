import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ showSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div
      className={`${
        showSearch ? "translate-y-0 opacity-100" : "-z-10 opacity-0 translate-y-[-60px] md:translate-y-0"
      } duration-300 ese-in-out absolute  md:z-0 md:static md:opacity-100 pe-10 md:pe-0 w-full md:w-auto lg:w-xs space-y-3 my-2 md:ms-3 lg:ms-10 mx-5 md:mx-2 mt-1 pt-5 md:pt-1 md:mt-1`}
    >
      <form onSubmit={handleSubmit} id="search" className="bg-neutral-900 border h-10 focus-within:border-yellow-300 border-1 items-center px-3 border-gray-500 flex rounded-full ">
        <FiSearch className="text-xl text-gray-500" />
        <input id="inputSearch" type="text" placeholder="Cari anime..." value={query} onChange={(e) => setQuery(e.target.value)} className="ms-2 h-full block w-full sm:text-sm " autoComplete="off" />
      </form>
    </div>
  );
};
