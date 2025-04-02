// src/hooks/useFetch.js
import { useState, useEffect } from "react";

const BASE_URL = "https://wajik-anime-api.vercel.app/otakudesu";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${url}`);
        if (!response.ok) throw new Error("Data tidak ditemukan");

        const result = await response.json();
        setDatas(result);
      } catch (err) {
        setError(err.message);
        setDatas(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { datas, loading, error };
};

export default useFetch;
