import useFetch from "../../services/api";

export const ContainerStreaming = ({ resolution, defaultStreaming }) => {
  let urlStream = defaultStreaming;

  if (resolution !== "") {
    const { datas, loading, error } = useFetch(`/server/${resolution}`);
    urlStream = datas?.data?.url;
  }

  return (
    <div className="video-container">
      <iframe className="w-full h-[210px] sm:h-[320px] md:h-[400px] lg:h-[540px]" src={urlStream} frameBorder="0" allowFullScreen title="Embedded Video"></iframe>
    </div>
  );
};
