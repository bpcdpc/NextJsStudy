import "./globals.css";
import style from "@/app/layout.module.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href="/">🧅 양파마켓</Link>
          </header>
          <main>{children}</main>
          <footer>&copy; 2026 양파마켓</footer>
        </div>
      </body>
    </html>
  );
}
