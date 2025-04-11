import useFetch from "../../services/api";

export const ContainerStreaming = ({ resolution, defaultStreaming }) => {
  const { datas, loading, error } = useFetch(resolution !== "" ? `/server/${resolution}` : null);

  const urlStream = resolution !== "" && datas?.data?.url ? datas?.data?.url : defaultStreaming;

  return (
    <div className="video-container w-full h-[210px] sm:h-[320px] md:h-[400px] lg:h-[540px]">
      <iframe className="h-full w-full" src={urlStream} frameBorder="0" allowFullScreen title="Embedded Video"></iframe>
    </div>
  );
};
