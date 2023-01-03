import Link from "next/link";

interface IProps {
  product: TProduct;
}

const AvocadoCard = ({ product }: IProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <article className="border-2 border-neutral-200 rounded-lg p-4 hover:scale-105 hover:shadow-lg transition-all">
        <img src={product.image} alt={product.name} />
        <h2 className="font-bold text-lg my-2">{product.name}</h2>
        <p className="text-neutral-600">$ {product.price}</p>
      </article>
    </Link>
  );
};

export default AvocadoCard;
