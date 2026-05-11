import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <head>
          <nav style={{ display: "flex", gap: "10px" }}>
            <Link href={"/"}>홈</Link>
            <Link href={"/search"}>검색</Link>
            <Link href={"/sale/:id"}>1번상품</Link>
          </nav>
        </head>
        {children}
      </body>
    </html>
  );
}
