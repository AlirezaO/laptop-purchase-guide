"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const SearchResultDisplay = () => {
  const [searchResult, setSearchResult] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchResult(search);
    }
  }, [searchParams]);
  return <p className="text-gray-800">Search value: {searchResult}</p>;
};
