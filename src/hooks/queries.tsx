"use client";
import fetchRotationChampion from "@/utils/riotApi";
import { fetchChampion } from "@/utils/serverApi";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useRotationDataQuery = () => {
  return useSuspenseQuery({
    queryKey: ["rotationId"],
    queryFn: () => fetchRotationChampion(),
  });
};

export const useChampionsDataQuery = () => {
  return useSuspenseQuery({
    queryKey: ["champions"],
    queryFn: () => fetchChampion(),
  });
};
