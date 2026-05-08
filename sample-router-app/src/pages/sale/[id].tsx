import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>{id} Product Details</h1>
    </div>
  );
}
