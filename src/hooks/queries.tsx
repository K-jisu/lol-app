"use client";
import { Champion } from "@/types/Champions";
import fetchRotationChampion from "@/utils/riotApi";
import { fetchChampion } from "@/utils/serverApi";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useRotationDataQuery = ({
  rotationInitial,
}: {
  rotationInitial: [number[], number[], number];
}) => {
  return useSuspenseQuery({
    queryKey: ["rotationId"],
    queryFn: () => fetchRotationChampion(),
    initialData: rotationInitial,
  });
};

export const useChampionsDataQuery = ({
  champsInitial,
}: {
  champsInitial: Champion[];
}) => {
  return useSuspenseQuery({
    queryKey: ["champions"],
    queryFn: () => fetchChampion(),
    initialData: champsInitial,
  });
};
