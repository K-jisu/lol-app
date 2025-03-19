import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvier";

export const metadata: Metadata = {
  title: "League of Legends",
  description: "League of Lengends Info app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="py-[100px]">
        <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
          <nav className="container mx-auto flex justify-around">
            <Link href={"/"}>홈</Link>
            <Link href={"/champions"}>챔피언 목록</Link>
            <Link href={"/items"}>아이템 목록</Link>
            <Link href={"/rotation"}>챔피언 로테이션</Link>
          </nav>
        </header>
        <main className="container m-auto mt-10">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
