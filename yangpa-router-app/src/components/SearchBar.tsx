"use client";

import { SubmitEvent, ChangeEvent, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <form className={style.searchbar_container} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하시오."
        value={query}
        onChange={onChangeQuery}
      />
      <button type="submit">검색</button>
    </form>
  );
}
