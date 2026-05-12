import style from "@/components/SaleItem.module.css";
import { SaleData } from "@/types/sale";
import Link from "next/link";
import Image from "next/image";
import { ENV } from "@/config/env";

export default function SaleItem({
  id,
  productName,
  description,
  price,
  photo,
}: SaleData) {
  const imageUrl = `${ENV.IMAGE_URL}/${photo}`;
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
        <span className={style.price}>{price}원</span>
      </div>
    </Link>
  );
}
