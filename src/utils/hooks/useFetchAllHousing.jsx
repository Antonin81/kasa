import { useFetch } from "./useFetch";

export function useFetchAllHousing() {
  const { data, isLoading, error } = useFetch("/data/logements.json");
  return { data, isLoading, error };
}
