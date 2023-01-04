import AvocadoAbout from "@components/AvocadoDetails/AvocadoAbout/AvocadoAbout";
import AvocadoHeader from "@components/AvocadoDetails/AvocadoHeader/AvocadoHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product = () => {
  const [avocado, setAvocado] = useState<TProduct>(null);

  // Access the param from the url
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getAvocado = async () => {
      const response = await window.fetch(`/api/avocados/${id}`);
      const data = await response.json();

      setAvocado(data);
    };

    getAvocado();
  }, []);

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
