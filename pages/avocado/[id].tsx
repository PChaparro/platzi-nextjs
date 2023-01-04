import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";
import AvocadoAbout from "@components/AvocadoDetails/AvocadoAbout/AvocadoAbout";
import AvocadoHeader from "@components/AvocadoDetails/AvocadoHeader/AvocadoHeader";

// Get all the avocados to obtain the ids we
// want to generate statically
export const getStaticPaths = async () => {
  const protocol = process.env.PROTOCOL;
  const target = process.env.BACKEND_URL;

  const response = await fetch(`${protocol}${target}/api/avocados`);
  const { data }: TAPIAvoResponse = await response.json();

  return {
    paths: data.map((avocado) => {
      return {
        params: {
          id: avocado.id,
        },
      };
    }),
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const protocol = process.env.PROTOCOL;
  const target = process.env.BACKEND_URL;

  const id = params?.id as string;
  const response = await fetch(`${protocol}${target}/api/avocados/${id}`);
  const data: TProduct = await response.json();

  return {
    props: {
      avocado: data,
    },
  };
};

const Product = ({ avocado }: { avocado: TProduct }) => {
  return avocado ? (
    <main>
      <AvocadoHeader avocado={avocado} />
      <AvocadoAbout attributes={avocado.attributes} />
    </main>
  ) : (
    <p className="text-center">Unable to load the requested item 😥</p>
  );
};

export default Product;
