import SaleItem from "@/components/SaleItem";
// import styles from "./index.module.css";
import sales from "@/mock/sales.json";
import SearchBarLayout from "@/components/SearchBarLayout";

export default function Home() {
  return (
    <section>
      <h3>최신 등록 상품</h3>
      {sales.map((item) => (
        <SaleItem key={item.productId} {...item} />
      ))}
    </section>
  );
}

Home.getLayout = (page: React.ReactNode) => (
  <SearchBarLayout>{page}</SearchBarLayout>
);
