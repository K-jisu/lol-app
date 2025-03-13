import fetchData from "../api/fetchData";
import ItemCard from "@/_components/ItemCard";

//SSG
const page = async () => {
  const data = await fetchData.fetchItems();
  // lol item && purchasable 아이템 필터링
  const lolPuchasableItems = data.filter((item) => {
    const mapValues = Object.values(item[1].maps);
    // lolMap
    const lolMap = mapValues[0] && mapValues[1] && mapValues[2];
    // 구매 가능한 item
    const puchasableItem = item[1].gold.purchasable;

    return lolMap && puchasableItem;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {lolPuchasableItems?.map((item) => {
          return <ItemCard key={item[0]} item={item} />;
        })}
      </div>
    </div>
  );
};

export default page;
