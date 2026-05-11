import style from "./[id].module.css";
import type { SaleData } from "@/types/sales";
import Image from "next/image";
import { useRouter } from "next/router";
import sales from "@/mock/sales.json";
import { fetchSaleById } from "@/utils/fetchSales";

export default async function Page() {
  const router = useRouter();
  const id = Number(router.query.id);

  // const product: SaleData[] = sales.filter((item) => item.productId === id);

  const sale: SaleData[] = await fetchSaleById(id);
  const product = sale[0];

  if (!product) {
    return <div>일치하는 상품이 없습니다.</div>;
  }

  const { productName, description, price, photo } = product;

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
