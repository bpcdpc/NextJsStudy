import style from "./SaleItem.module.css";

import type { SaleData } from "@/types/sale";

import Image from "next/image";
import Link from "next/link";

export default function SaleItem({
  id,
  productName,
  description,
  photo,
  price,
}: SaleData) {
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${photo}`;
  return (
    <Link href={`/sale/${id}`} className={style.container}>
      <Image
        src={imageUrl}
        alt={`${productName}의 사진`}
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <h2 className={style.title}>{productName}</h2>
        <p className={style.description}>{description}</p>
        <span className={style.price}>{price.toLocaleString()}원</span>
      </div>
    </Link>
  );
}
