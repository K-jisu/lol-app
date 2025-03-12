"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import fetchData from "../api/fetchData";
import ItemCard from "@/_components/ItemCard";

const page = () => {
  const { data: items, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchData.fetchItems,
  });

  if (isLoading) return <div>...Loading</div>;
  return (
    <div>
      <h1>아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items?.map((item) => {
          return <ItemCard key={item[0]} item={item} />;
        })}
      </div>
    </div>
  );
};

export default page;
