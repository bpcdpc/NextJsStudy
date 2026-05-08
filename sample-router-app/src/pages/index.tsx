import styles from "./index.module.css";

import SearchBarLayout from "@/components/SearchBarLayout";

export default function Home() {
  return (
    <div className={styles.title}>
      <h1>This is an index page.</h1>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => (
  <SearchBarLayout>{page}</SearchBarLayout>
);
