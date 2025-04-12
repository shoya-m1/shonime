import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";
import DetailAnime from "./pages/DetailAnime";
import { AnimeStreaming } from "./pages/AnimeStreaming";
import AnimeSearch from "./pages/AnimeSearch";
import AnimeList from "./pages/AnimeList";
import AnimeFavorite from "./pages/AnimeFavorite";
import AnimeGenre from "./pages/AnimeGenre";
import JadwalAnime from "./pages/JadwalAnime";
import Home from "./pages/Home";
import { AnimeOngoing } from "./pages/AnimeOngoing";
import { AnimeMovie } from "./pages/AnimeMovie";
import { ButtonToTop } from "./components/ButtonToTop";
import { FavoritesProvider } from "./context/FavoritesContext";
import { NotFound } from "./pages/NotFound";
import { AnimeBatch } from "./pages/AnimeBatch";
import DetailBatch from "./pages/DetailBatch";
const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<DetailAnime />} />
          <Route path="/batch/:id" element={<DetailBatch />} />
          <Route path="/episode/:id" element={<AnimeStreaming />} />
          <Route path="/genre/:id" element={<AnimeGenre />} />
          <Route path="/search/" element={<AnimeSearch />} />
          <Route path="/ongoing/" element={<AnimeOngoing />} />
          <Route path="/completed/" element={<AnimeMovie />} />
          <Route path="/batch/" element={<AnimeBatch />} />
          <Route path="/daftar-anime/" element={<AnimeList />} />
          <Route path="/favorite/" element={<AnimeFavorite />} />
          <Route path="/jadwal/" element={<JadwalAnime />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ButtonToTop />
      </Router>
    </FavoritesProvider>
  );
};
export default App;
