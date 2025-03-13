"use client";
import React from "react";
import fetchData from "../api/fetchData";
import ItemCard from "@/_components/ItemCard";

//SSG
// todo : puchasable 로 구매 가능 아이템만 필터링
const page = async () => {
  const items = await fetchData.fetchItems();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items?.map((item) => {
          return <ItemCard key={item[0]} item={item} />;
        })}
      </div>
    </div>
  );
};

export default page;
