import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

export const ContainerSynopsis = ({ paragraf }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <section className="mt-5">
      <h2 className="font-semibold md:text-2xl text-xl mb-2">Sinopsis</h2>
      <div className={`${paragraf?.paragraphs?.length > 1 ? "h-15" : "h-auto"} ${readMore ? "h-auto" : "h-15"} mb-2 duration-300 ese-in-out flex flex-col gap-2 md:text-sm text-[13px] text-neutral-400 text-justify overflow-hidden`}>
        {paragraf?.paragraphs?.map((value, i) => (
          <p key={i}>{value}</p>
        ))}
      </div>
      <span
        className={`${paragraf?.paragraphs?.length > 1 ? "block" : "hidden"} text-xs text-yellow-300 cursor-pointer`}
        onClick={() => {
          setReadmore(!readMore);
        }}
      >
        Lihat Selengkapnya <IoIosArrowDown className={`${readMore ? "rotate-180" : "rotate-360"} duration-300 ese-in-out inline text-sm`} />
      </span>
    </section>
  );
};
