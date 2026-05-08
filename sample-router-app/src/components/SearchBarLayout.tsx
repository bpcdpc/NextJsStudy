import { KeyboardEvent, ChangeEvent, useState, useRef } from "react";
import style from "./SearchBarLayout.module.css";
import { useRouter } from "next/router";

export default function SearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = () => {
    if (!query || router.query.q === query) return;
    router.push(`/search?q=${query}`);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <section>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하시오."
          value={query}
          onChange={onChangeQuery}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </section>
  );
}
