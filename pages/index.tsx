import AvocadoCard from "@components/AvocadoCard/AvocadoCard";
import fetch from "isomorphic-unfetch";

export const getStaticProps = async (params) => {
  const protocol = process.env.PROTOCOL;
  const target = process.env.BACKEND_URL;

  const response = await fetch(`${protocol}${target}/api/avocados`);
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      avocados: data,
    },
  };
};

const Home = ({ avocados }: { avocados: TProduct[] }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Platzi avocados</h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {avocados.map((avocado) => (
          <AvocadoCard key={avocado.id} product={avocado} />
        ))}
      </section>
    </div>
  );
};

export default Home;
