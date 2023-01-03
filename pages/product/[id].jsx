import { useRouter } from "next/router";

const Product = () => {
  // Access the param from the url
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product: [{id}]</h1>
    </div>
  );
};

export default Product;
