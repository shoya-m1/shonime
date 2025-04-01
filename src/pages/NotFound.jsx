import menheraChibi from "../assets/gif/chibi2.gif";

export const NotFound = () => {
  return (
    <main className="pt-26">
      <section className="lg:m-auto mx-5 py-5 max-w-6xl bg-neutral-900 border border-1 border-neutral-700/60 rounded-xl">
        <span className="w-full bt-20 min-h-screen flex justify-center items-center">
          <img className="w-50" src={menheraChibi} alt="gif" />
        </span>
      </section>
    </main>
  );
};
