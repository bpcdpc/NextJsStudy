export default function SearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <input type="text" placeholder="검색어를 입력하시오." />
        <button>검색</button>
      </div>
      {children}
    </section>
  );
}
