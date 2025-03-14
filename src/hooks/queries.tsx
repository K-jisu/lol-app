import fetchData from "@/app/api/fetchData";
import { useQuery } from "@tanstack/react-query";

const useRotationDataQuery = () => {
  return useQuery({
    queryKey: ["rotationId"],
    queryFn: () => {
      return fetchData.fetchRotationChampion();
    },
  });
};

const useChampionsDataQuery = () => {
  return useQuery({
    queryKey: ["champions"],
    queryFn: () => {
      return fetchData.fetchChampion();
    },
  });
};

const useChampionsQueries = {
  useRotationDataQuery,
  useChampionsDataQuery,
};

export default useChampionsQueries;
