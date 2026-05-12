import type { SaleData } from "@/types/sale";
import SaleItem from "@/components/SaleItem";
import { ENV } from "@/config/env";
import { fetchSales } from "@/utils/fetchSales";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const sales = await fetchSales(q);

  return (
    <>
      <h3>검색 페이지</h3>
      {!sales ? (
        <div>일치하는 상품이 없습니다.</div>
      ) : (
        <div>
          {sales.map((sale) => (
            <SaleItem key={sale.id} {...sale} />
          ))}
        </div>
      )}
    </>
  );
}
