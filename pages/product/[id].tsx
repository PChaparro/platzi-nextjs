import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product = () => {
  const [avocado, setAvocado] = useState<TProduct>(null)

  // Access the param from the url
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getAvocado = async () => {
      const response = await window.fetch(`/api/avocados/${id}`)
      const data = await response.json()
      setAvocado(data)
    }

    getAvocado()
  }, [])

  return (
    <div>
      <h1>Product: [{avocado.id}]</h1>
      <h2>{avocado.name}</h2>
    </div>
  );
};

export default Product;
