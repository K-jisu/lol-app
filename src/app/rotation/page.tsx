// import RotationClientPage from "@/components/RotationClientPage";
import RotationClientPage from "@/components/RotationClientPage";
import fetchRotationChampion from "@/utils/riotApi";
import { fetchChampion } from "@/utils/serverApi";
// import { fetchChampion } from "@/utils/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const serverPage = async () => {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery({
      queryKey: ["rototaionChamps"],
      queryFn: fetchRotationChampion,
    });

    await queryClient.prefetchQuery({
      queryKey: ["champs"],
      queryFn: fetchChampion,
    });
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RotationClientPage />
      </HydrationBoundary>
    );
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.", error);
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }
};

export default serverPage;
