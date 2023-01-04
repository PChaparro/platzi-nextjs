import type { AppProps } from "next/app";
import Layout from "@layouts/Layout";
import "@styles/globals.css";
import { BasketProvider } from "@context/Basket/BasketContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketProvider>
  );
}
