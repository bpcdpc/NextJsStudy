import SaleItem from "@/components/SaleItem";
import SearchBarLayout from "@/components/SearchBarLayout";
import { fetchSalesRecent } from "@/utils/fetchSales";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  console.log("getStaticProps");
  const sales = await fetchSalesRecent();
  return { props: { sales } };
}

export default function Home({
  sales,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h3>최신 등록 상품</h3>
      {sales?.map((item) => (
        <SaleItem key={item.id} {...item} />
      ))}
    </section>
  );
}

Home.getLayout = (page: React.ReactNode) => (
  <SearchBarLayout>{page}</SearchBarLayout>
);
