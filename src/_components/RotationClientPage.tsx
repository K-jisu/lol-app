"use client";

import Loading from "@/app/rotation/loading";
import { useChampionsDataQuery, useRotationDataQuery } from "@/hooks/queries";
import { Champion } from "@/types/Champions";
import conversionFreeChampion from "@/utils/conversionFreeChampion";
import { Suspense } from "react";
import ChampionCard from "./ChampionCard";

export type RotationProps = {
  rotationInitial: [number[], number[], number];
  champsInitial: Champion[];
};

const RotationClientPage = ({
  rotationInitial,
  champsInitial,
}: RotationProps) => {
  const { data: rotationData } = useRotationDataQuery({ rotationInitial });

  const { data: champions } = useChampionsDataQuery({ champsInitial });

  const freeChampionsId = rotationData[0];
  const freeChampionForNewbieId = rotationData[1];
  const maxNewbieLevel = rotationData[2];

  const rotationChampions = conversionFreeChampion(freeChampionsId, champions);
  const freeChampionForNewbie = conversionFreeChampion(
    freeChampionForNewbieId,
    champions
  );

  return (
    <div>
      <section>
        <h2>이번주 무료 챔피언</h2>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {rotationChampions.map((champion) => {
              return <ChampionCard key={champion.id} champion={champion} />;
            })}
          </div>
        </Suspense>
      </section>
      <section>
        <h2>신규 사용자 무료 챔피언(사용자 레벨 {maxNewbieLevel}LV 까지)</h2>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {freeChampionForNewbie.map((champion) => {
              return <ChampionCard key={champion.id} champion={champion} />;
            })}
          </div>
        </Suspense>
      </section>
    </div>
  );
};

export default RotationClientPage;
