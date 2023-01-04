import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@layouts/Layout";
import "@styles/globals.css";
import { BasketProvider } from "@context/Basket/BasketContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Buy fresh avocados online and easy."
        />
        <meta
          name="keywords"
          content="Avocado, buy online, avo store, Hass, Maluma Hass, Gwen Hass, Bacon, Lamb Hass, Pinkerton, Reed, Zutano"
        />
      </Head>
      <BasketProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BasketProvider>
    </>
  );
}
