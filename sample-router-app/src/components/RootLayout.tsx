import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>
          <Link href="/">🧅 양파마켓</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>&copy; 2006. 양파마켓</footer>
    </div>
  );
}
