import style from "./[id].module.css";
import type { SaleData } from "@/types/sales";
import Image from "next/image";
import { useRouter } from "next/router";
import sales from "@/mock/sales.json";

export default function Page() {
  const router = useRouter();
  const id = Number(router.query.id);

  const { productId, productName, description, price, photo }: SaleData =
    sales[id];

  const imageUrl = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;

  return (
    <div className={style.container}>
      {id}
      <div className={style.cover_img_container}>
        <Image src={imageUrl} alt={productName} className={style.cover_img} />
      </div>
      <h2 className={style.title}>{productName}</h2>
      <p className={style.description}>{description}</p>
      <span className={style.price}>{price}</span>
    </div>
  );
}
