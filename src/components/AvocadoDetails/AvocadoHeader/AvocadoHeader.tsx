import { FormEvent, useContext } from "react";
import { BasketContext } from "@context/Basket/BasketContext";

interface IProps {
  avocado: TProduct;
}

const AvocadoHeader = ({ avocado }: IProps) => {
  const { addToBasket, basket } = useContext(BasketContext);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    const { amount } = data;
    addToBasket({ ...avocado, amount: Number(amount) });
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <img className="mx-auto" src={avocado.image} alt={avocado.name} />
      <div className="flex flex-col items-center md:items-start gap-3 mb-8">
        <h1 className="text-xl font-bold">{avocado.name}</h1>
        <p className="text-neutral-600">$ {avocado.price}</p>
        <p className="text-sm inline-block bg-neutral-300 py-1 px-2 rounded-md">
          SKU: {avocado.sku}
        </p>
        <form className="flex w-full" onSubmit={handleFormSubmit}>
          <input
            className="grow border-2 p-2"
            type="number"
            min={1}
            placeholder="1"
            name="amount"
            aria-labelledby="atb-btn"
            required
          />
          <button
            id="atb-btn"
            className="bg-green-700 text-white px-2 whitespace-nowrap"
          >
            Add to basket
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvocadoHeader;
