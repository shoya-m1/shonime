import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteAnimes, setFavoriteAnimes] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    setFavoriteAnimes(storedFavorites);
  }, []);

  const toggleFavorite = (anime) => {
    let updatedFavorites = [...favoriteAnimes];
    const animeIndex = updatedFavorites.findIndex((item) => item.animeId === anime.animeId);

    if (animeIndex >= 0) {
      updatedFavorites = updatedFavorites.filter((item) => item.animeId !== anime.animeId);
    } else {
      updatedFavorites.push(anime);
    }

    localStorage.setItem("favoriteAnimes", JSON.stringify(updatedFavorites));
    setFavoriteAnimes(updatedFavorites);
  };

  return <FavoritesContext.Provider value={{ favoriteAnimes, toggleFavorite }}>{children}</FavoritesContext.Provider>;
};

