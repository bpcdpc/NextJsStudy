export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>헤더입니다.</h1>
      </header>
      <main>{children}</main>
      <footer>
        <div>푸터입니다.</div>
      </footer>
    </div>
  );
}
