import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export function useFetchOneHousing(id) {
  const { data, isLoading, error } = useFetch("/data/logements.json");
  const [housing, setHounsing] = useState(null);
  useEffect(() => {
    if (!isLoading && data) {
      const foundHousing = data.find(
        (testedHousing) => testedHousing.id === id,
      );
      setHounsing(foundHousing);
    }
  }, [isLoading, data, id]);
  return { data: housing, isLoading, error };
}
