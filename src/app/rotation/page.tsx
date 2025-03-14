"use client";
import ChampionCard from "@/_components/ChampionCard";
import conversionFreeChampion from "@/utils/conversionFreeChampion";
import useChampionsQueries from "@/hooks/queries";

const page = () => {
  const {
    data: rotationData,
    isPending,
    isError,
  } = useChampionsQueries.useRotationDataQuery();

  const {
    data: champions,
    isPending: isPendingChampions,
    isError: isErrorChampions,
  } = useChampionsQueries.useChampionsDataQuery();

  if (isPending) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>...Error</div>;
  }
  if (isPendingChampions) {
    return <div>...loading</div>;
  }
  if (isErrorChampions) {
    return <div>...Error</div>;
  }

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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {rotationChampions.map((champion) => {
            return <ChampionCard key={champion.id} champion={champion} />;
          })}
        </div>
      </section>
      <section>
        <h2>신규 사용자 무료 챔피언(사용자 레벨 {maxNewbieLevel}LV 까지)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {freeChampionForNewbie.map((champion) => {
            return <ChampionCard key={champion.id} champion={champion} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default page;
