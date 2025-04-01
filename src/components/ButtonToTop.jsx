import { IoIosArrowUp } from "react-icons/io";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";

export const ButtonToTop = () => {
  const { y } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(y > 100);
  }, [y]);

  return (
    <>
      {isVisible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="duration-300 text-2xl fixed z-5 bottom-5 right-5 px-3 py-3 rounded-full bg-yellow-500">
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};
