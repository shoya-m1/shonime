import useFetch from "../../services/api";
import { LuMonitorPlay } from "react-icons/lu";

export const ContainerStreaming = ({ resolution, defaultStreaming }) => {
  let urlStream = defaultStreaming;

  if (resolution !== "") {
    const { datas, loading, error } = useFetch(`/server/${resolution}`);
    urlStream = datas?.data?.url;
  }

  return (
    <div className="video-container w-full h-[210px] sm:h-[320px] md:h-[400px] lg:h-[540px]">
      <iframe className="h-full w-full" src={urlStream} frameBorder="0" allowFullScreen title="Embedded Video"></iframe>
    </div>
  );
};
