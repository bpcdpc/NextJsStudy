import style from "./[id].module.css";
import type { SaleData } from "@/types/sales";
import Image from "next/image";
import { useRouter } from "next/router";
import sales from "@/mock/sales.json";

export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);

  const product: SaleData[] = sales.filter((item) => item.productId === id);

  if (!product || product.length === 0) {
    return <div>일치하는 상품이 없습니다.</div>;
  }

  const { productId, productName, description, price, photo } = product[0];

  const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container}>
        <Image
          src={imageUrl}
          alt={productName}
          className={style.cover_img}
          fill
        />
      </div>
      <h2 className={style.title}>{productName}</h2>
      <p className={style.description}>{description}</p>
      <span className={style.price}>{price.toLocaleString()}원</span>
    </div>
  );
}
