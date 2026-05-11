export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>{id}번 상품 상세 페이지</h1>
    </div>
  );
}
