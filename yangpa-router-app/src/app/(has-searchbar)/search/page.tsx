import SearchBar from "@/components/SearchBar";
import sales from "@/mock/sales.json";
import SaleItem from "@/components/SaleItem";
import { fetchSales } from "@/utils/fetchSales";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const title = q ? `${q}에 대한 검색결과` : "검색결과";

  const sales = await fetchSales();

  const filteredSales = sales.filter((sale) =>
    sale.productName.toLowerCase().includes(q!),
  );

  return (
    <>
      <h2>{title}</h2>

      {filteredSales.length === 0 ? (
        <div>일치하는 상품이 없습니다.</div>
      ) : (
        filteredSales.map((item) => <SaleItem key={item.id} {...item} />)
      )}
    </>
  );
}
