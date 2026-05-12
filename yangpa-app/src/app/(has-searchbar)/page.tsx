import SaleItem from "@/components/SaleItem";
import type { SaleData } from "@/types/sale";
import { ENV } from "@/config/env";
import { fetchSalesRecent } from "@/utils/fetchSales";

export default async function Home() {
  const sales = await fetchSalesRecent();

  return (
    <>
      <h3>최근 등록된 상품</h3>
      <div>
        {sales.map((sale) => (
          <SaleItem key={sale.id} {...sale} />
        ))}
      </div>
    </>
  );
}
