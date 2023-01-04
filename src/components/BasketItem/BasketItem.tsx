import Link from "next/link";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BasketContext, TBasketItem } from "@context/Basket/BasketContext";

interface IProps {
  avocado: TBasketItem;
}

const BasketItem = ({ avocado }: IProps) => {
  const { removeFromBasket } = useContext(BasketContext);

  const handleRemoveClick = () => {
    removeFromBasket(avocado);
  };

  return (
    <article className="flex gap-4 border-2 p-2 relative">
      <img className="h-32" src={avocado.image} alt={avocado.name} />
      <div>
        <Link href={`/avocado/${avocado.id}`}>
          <h2 className="text-green-700 font-bold capitalize">
            {avocado.name}
          </h2>
        </Link>
        <p className="text-sm text-neutral-600">
          $ {avocado.price} x {avocado.amount}
        </p>
        <p className="text-sm">Some more information goes here...</p>
      </div>
      <button
        className="absolute right-4 top-4 border-2 p-2"
        aria-label={`Remove ${avocado.name} from the basket`}
        onClick={handleRemoveClick}
      >
        <FiTrash2 size="1.2rem" />
      </button>
    </article>
  );
};

export default BasketItem;
