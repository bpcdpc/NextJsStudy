import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout;
  return <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>;
}
