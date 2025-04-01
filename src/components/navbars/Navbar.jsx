import { useState } from "react";
import "../../styles/app.css";

// icon
import { FiSearch } from "react-icons/fi";
import { NavbarLink } from "./NavbarLink";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  const [menuKlik, setMenuKlik] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header className="px-2 fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 md:mx-5 py-2 md:py-0 relative max-w-6xl w-full border border-gray-200 rounded-2xl md:rounded-full mx-2 md:flex md:items-center md:justify-between md:mx-auto bg-neutral-900 border-neutral-700">
        <div className="px-4 flex justify-between items-center">
          <div className="md:hidden">
            <button type="button" className="">
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setMenuKlik(!menuKlik);
                    setIsChecked(!isChecked);
                    setShowSearch(false);
                  }}
                />
                <svg viewBox="0 0 32 32">
                  <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </button>
          </div>
          <div className="flex items-center">
            <a className="lg:ms-6 brand flex-none rounded-md text-lg lg:text-xl inline-block font-semibold " href="../templates/personal/index.html" aria-label="Preline">
              <span className="text-yellow-300">Shoya</span>
              Nime
            </a>
            <div className="ms-1 sm:ms-2"></div>
          </div>
          <FiSearch
            onClick={() => {
              setMenuKlik(false);
              setIsChecked(false);
              setShowSearch(!showSearch);
            }}
            className="md:hidden block text-2xl text-gray-500"
          />
        </div>
        <div className="relative flex">
          <div id="hs-navbar-header-floating" className={`${menuKlik ? "block h-42 mt-5" : "h-0 md:h-auto"} md:mt-2 z-5 hs-collapse overflow-hidden transition-all duration-300 `} aria-labelledby="hs-navbar-header-floating-collapse">
            <NavbarLink />
          </div>
          <SearchBar showSearch={showSearch} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
