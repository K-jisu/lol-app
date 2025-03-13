import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  item: [string, Item];
};

const ItemCard = ({ item }: ItemProps) => {
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
            src={`${process.env.NEXT_PUBLIC_RIOT_IMG_URL}item/${itemInfo.image.full}`}
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
