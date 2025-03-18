import RotationClientPage from "@/components/RotationClientPage";
import fetchRotationChampion from "@/utils/riotApi";
import { fetchChampion } from "@/utils/serverApi";

const serverPage = async () => {
  const rotationChamps = await fetchRotationChampion();
  const champs = await fetchChampion();
  return (
    <RotationClientPage
      rotationInitial={rotationChamps}
      champsInitial={champs}
    />
  );
};

export default serverPage;
