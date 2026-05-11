import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/RootLayout";
import SearchBarLayout from "@/components/SearchBarLayout";
import { NextPage } from "next";
import { ReactNode } from "react";
type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout || ((page) => page);
  const getLayoutInternal = (page: React.ReactNode) => (
    <SearchBarLayout>{page}</SearchBarLayout>
  );

  return <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>;
}
