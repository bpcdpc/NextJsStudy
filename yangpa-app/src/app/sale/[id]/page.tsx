import style from "@/app/sale/[id]/page.module.css";
import Image from "next/image";
import { SaleData } from "@/types/sale";
import { ENV } from "@/config/env";
import { fetchSaleById } from "@/utils/fetchSales";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productNumber: number = Number(id);
  const sales = await fetchSaleById(productNumber);

  const { productName, description, price, photo } = sales[0];
  const imageUrl = `${ENV.IMAGE_URL}/${photo}`;

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
      <span className={style.price}>{price}원</span>
    </div>
  );
}
