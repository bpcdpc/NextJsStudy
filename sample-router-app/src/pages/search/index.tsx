import SearchBarLayout from "@/components/SearchBarLayout";
import SaleItem from "@/components/SaleItem";
import { fetchSales } from "@/utils/fetchSales";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;
  const sales = await fetchSales(q as string);
  return { props: { sales } };
}

export default function Search({
  sales,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const q = router.query.q;
  const title = q ? `${q}에 대한 검색결과` : "검색결과";

  return (
    <section>
      <h2>{title}</h2>

      {sales.map((item) => (
        <SaleItem key={item.id} {...item} />
      ))}
    </section>
  );
}

Search.getLayout = (page: React.ReactNode) => (
  <SearchBarLayout>{page}</SearchBarLayout>
);
