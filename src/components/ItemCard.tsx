import RIOT_CONSTANT from "@/constants/RIOT_CONSTANT";
import { Item } from "@/types/Items";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  item: [string, Item];
  version: string;
};

const ItemCard = ({ item, version }: ItemProps) => {
  const id = item[0];
  const itemInfo = item[1];
  return (
    <Link href={`/items/${id}`} className="border rounded p-4 hover:shadow-lg">
      <article>
        <figure>
          <Image
            className="m-auto rounded-md"
            width={80}
            height={80}
            src={`${RIOT_CONSTANT.RIOT_URL}/cdn/${version}/img/item/${itemInfo.image.full}`}
            alt={itemInfo.name}
          />
        </figure>
        <h2 className="mt-2 text-xl font-semibold">{itemInfo.name}</h2>
        <p className="text-gray-500">{itemInfo.plaintext}</p>
      </article>
    </Link>
  );
};

export default ItemCard;
