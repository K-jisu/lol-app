import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/image/image1.webp";
import image2 from "@/public/image/image2.jpg";
import image3 from "@/public/image/image3.jpg";

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        League of Legends
      </h1>

      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
            챔피언 목록
          </h2>
          <Link href="/champions">
            <Image
              width={600}
              height={600}
              src={image1}
              alt="챔피언 목록"
              className="rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-transform hover:scale-105"
            />
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
            아이템 목록
          </h2>
          <Link href="/items">
            <Image
              width={600}
              height={600}
              src={image2}
              alt="아이템 목록"
              className="rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-transform hover:scale-105"
            />
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
            챔피언 로테이션
          </h2>
          <Link href="/rotation">
            <Image
              width={600}
              height={600}
              src={image3}
              alt="챔피언 로테이션"
              className="rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
