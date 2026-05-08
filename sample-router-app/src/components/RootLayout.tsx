import Link from "next/link";
import style from "./RootLayout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header>
        <Link href="/">🧅 양파마켓</Link>
      </header>
      <main>{children}</main>
      <footer>&copy; 2006. 양파마켓</footer>
    </div>
  );
}
