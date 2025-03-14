import fetchRotationChampion from "@/utils/riotApi";
import serverApi from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

const useRotationDataQuery = () => {
  return useQuery({
    queryKey: ["rotationId"],
    queryFn: () => {
      return fetchRotationChampion();
    },
  });
};

const useChampionsDataQuery = () => {
  return useQuery({
    queryKey: ["champions"],
    queryFn: () => {
      return serverApi.fetchChampion();
    },
  });
};

const useChampionsQueries = {
  useRotationDataQuery,
  useChampionsDataQuery,
};

export default useChampionsQueries;
