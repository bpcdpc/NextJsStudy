import { fetchSaleById, fetchSales } from "@/utils/fetchSales";
import style from "./[id].module.css";

import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";

export async function getStaticPaths() {
  const sales = await fetchSales();

  return {
    paths: sales.map((item) => ({ params: { id: String(item.id) } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params!.id;
  const sales = await fetchSaleById(Number(id));
  return { props: { sales }, revalidate: 10 }; // ISR (Incremental Static Regeneration : 증분 정적 페이지 재생성)
}

export default function Page({
  sales,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!sales) {
    return <div>일치하는 상품이 없습니다.</div>;
  }

  const { productName, description, price, photo } = sales[0];

  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${photo}`;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <Image
          src={imageUrl}
          alt={productName}
          className={style.cover_img}
          width={300}
          height={300}
        />
      </div>
      <h2 className={style.title}>{productName}</h2>
      <p className={style.description}>{description}</p>
      <span className={style.price}>{price.toLocaleString()}원</span>
    </div>
  );
}
