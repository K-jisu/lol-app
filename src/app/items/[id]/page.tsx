"use client";
import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { Item } from "@/types/Items";
import serverApi from "@/utils/serverApi";
import parse from "html-react-parser";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

type ItemDetailType = Omit<Item, "colloq" | "into" | "tags" | "maps" | "stats">;

const page = async ({ params }: Props) => {
  const id = params.id;
  const data = await serverApi.fetchItems();

  const itemArray = data.filter((item) => item[0] === id)[0];
  const itemInfo: ItemDetailType = itemArray[1];

  return (
    <div className="flex justify-center">
      <div className=" text-gray-300 p-4 rounded-xl shadow-lg border border-yellow-500 max-w-xs">
        <figure className="flex justify-center">
          <Image
            width={80}
            height={80}
            src={`${RIOT_CONSTANT.RIOT_IMG_URL}item/${itemInfo.image.full}`}
            alt={itemInfo.name}
            className="rounded-full border-2 border-yellow-500"
          />
        </figure>
        <h2 className="text-lg font-bold text-yellow-400 mt-2">
          {itemInfo.name}
        </h2>
        <p className="text-sm text-gray-400 italic">{itemInfo.plaintext}</p>
        <p className="text-sm">{parse(itemInfo.description)}</p>
        <div className="mt-3 space-y-1 text-sm">
          <p>
            <span className="text-yellow-400">기본 가격 : </span>
            {itemInfo.gold.base}
          </p>
          <p>
            <span className="text-yellow-400">판매 가격 : </span>
            {itemInfo.gold.sell}
          </p>
          <p>
            <span className="text-yellow-400">총 가격 : </span>
            {itemInfo.gold.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
