import { useRouter } from "next/router";
import SearchBarLayout from "@/components/SearchBarLayout";

export default function Search() {
  const router = useRouter();
  const q = router.query.q;
  return (
    <div>
      <h1>This is a search page.</h1>
      <p style={{ fontSize: "30px" }}>
        Your search query is <span style={{ color: "red" }}>{q}</span>.
      </p>
    </div>
  );
}

Search.getLayout = (page: React.ReactNode) => (
  <SearchBarLayout>{page}</SearchBarLayout>
);
