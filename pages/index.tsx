import { useEffect, useState } from "react";
import AvocadoCard from "@components/AvocadoCard/AvocadoCard";

const Home = () => {
  const [avocados, setAvocados] = useState<TProduct[]>([]);

  useEffect(() => {
    const getAvocados = async () => {
      const response = await window.fetch("/api/avocados");
      const json = await response.json();
      setAvocados(json.data);
    };

    getAvocados();
  }, []);

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
