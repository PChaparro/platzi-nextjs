import { useEffect, useState } from "react";

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
      <h1>Static and basic home page.</h1>
      {avocados.map((avocado) => {
        return (
          <article key={avocado.id}>
            <h2>{avocado.name}</h2>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
