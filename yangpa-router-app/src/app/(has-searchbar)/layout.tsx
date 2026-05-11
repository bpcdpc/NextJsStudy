export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <form>
        <input type="text" placeholder={"검색어를 입력하시오."} />
        <button>검색</button>
      </form>
      {children}
    </section>
  );
}
