export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      <h1>
        검색어 <strong>{q}</strong>의 페이지 입니다.
      </h1>
    </div>
  );
}
