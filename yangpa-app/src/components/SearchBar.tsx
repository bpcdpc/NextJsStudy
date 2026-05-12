"use client";

import style from "@/components/SearchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [query, setQuery] = useState<string>(q || "");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query || q === query) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <form className={style.searchbar_container} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하시오."
        value={query}
        onChange={onChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}
