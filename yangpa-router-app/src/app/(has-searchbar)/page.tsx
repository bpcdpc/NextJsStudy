import SearchBar from "@/components/SearchBar";
import SaleItem from "@/components/SaleItem";

import { fetchSalesRecent } from "@/utils/fetchSales";

export default async function Home() {
  const sales = await fetchSalesRecent();

  return (
    <>
      <h3>최신 등록 상품</h3>
      {sales?.map((item) => (
        <SaleItem key={item.id} {...item} />
      ))}
    </>
  );
}
