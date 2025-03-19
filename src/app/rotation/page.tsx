import RotationClientPage from "@/components/RotationClientPage";
import fetchRotationChampion from "@/utils/riotApi";
import { fetchChampion } from "@/utils/serverApi";

const serverPage = async () => {
  try {
    const rotationChamps = await fetchRotationChampion();
    const champs = await fetchChampion();
    return (
      <RotationClientPage
        rotationInitial={rotationChamps}
        champsInitial={champs}
      />
    );
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.", error);
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }
};

export default serverPage;
