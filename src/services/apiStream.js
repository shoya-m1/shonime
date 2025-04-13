// src/hooks/useFetch.js
import { useState, useEffect } from "react";

const BASE_URL = "https://api-anime-production-4858.up.railway.app/samehadaku";

const useStream = (endpoint) => {
  const [animes, setAnimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setAnimes(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { animes, loading, error };
};

export default useStream;
