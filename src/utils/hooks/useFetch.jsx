import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (!url) return;
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
