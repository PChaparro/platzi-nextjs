import Link from "next/link";
import Image from "next/image";

interface IProps {
  product: TProduct;
}

const AvocadoCard = ({ product }: IProps) => {
  return (
    <Link href={`/avocado/${product.id}`}>
      <article className="h-full text-center border-2 border-neutral-200 rounded-lg p-4 hover:scale-105 hover:shadow-lg transition-all">
        <Image
          className="mx-auto"
          src={product.image}
          alt={product.name}
          width={198}
          height={198}
        />
        <h2 className="font-bold text-lg  my-2">{product.name}</h2>
        <p className="text-neutral-600">$ {product.price}</p>
      </article>
    </Link>
  );
};

export default AvocadoCard;
